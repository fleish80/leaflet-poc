import {WingMapItem} from '../../../core/models/items/wing-map.item';
import {TreeNode} from '../map-tree/tree-node.model';
import {MapItem} from '../map-item/map-item.model';

export const mapListId = 'map-list';

const treeNodeIdPrefix = 'tree-node-';

export class MapList {

  mapItems: MapItem[];
  gatewayGroupNodes: TreeNode[];
  hierarchyNodes: TreeNode[];

  constructor(mapItems: MapItem[], buildMapIdsList: string[]) {
    this.setMapItems(mapItems, buildMapIdsList);
    this.setGatewayGroupNodes();
    this.setHierarchyNodes();
  }

  private setMapItems(mapItems: MapItem[], buildMapIdsList: string[]) {
    mapItems.forEach((mapItem: MapItem) => mapItem.cdkDropListConnectedTo = buildMapIdsList);
    this.mapItems = mapItems;
  }

  private setGatewayGroupNodes() {
    const gatewayGroupNodeMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    this.mapItems.forEach((wingMapItem: WingMapItem, index: number) => {
      const gatewayGroupName = wingMapItem.gatewayGroup;
      if (!gatewayGroupNodeMap.has(gatewayGroupName)) {
        gatewayGroupNodeMap.set(gatewayGroupName, {id: `${treeNodeIdPrefix}${index}`, nodeName: gatewayGroupName, children: []});
      }
      const treeNode = gatewayGroupNodeMap.get(gatewayGroupName);
      treeNode.children.push(wingMapItem);
    });
    this.gatewayGroupNodes = Array.from(gatewayGroupNodeMap.values());
  }

  private setHierarchyNodes() {
    const hierarchyNodesMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    this.mapItems.forEach((wingMapItem: WingMapItem, index: number) => {
      const hierarchyName = wingMapItem.hierarchy || '';
      const hierarchies = hierarchyName.split('>');

      let previousNode;
      hierarchies.forEach((hierarchy: string, indexHierarchies: number) => {
        if (indexHierarchies === 0) {
          if (!hierarchyNodesMap.has(hierarchy)) {
            hierarchyNodesMap.set(
              hierarchy, {id: `${treeNodeIdPrefix}${index}-${indexHierarchies}`, nodeName: hierarchy, key: 'no_hierarchy', children: []});
          }
          previousNode = hierarchyNodesMap.get(hierarchy);
        } else {
          if (!previousNode.children.some((tn: TreeNode) => tn.nodeName === hierarchy)) {
            previousNode.children.push({id: `${treeNodeIdPrefix}${index}-${indexHierarchies}`, nodeName: hierarchy, children: []});
          }
          previousNode = previousNode.children.find((tn: TreeNode | WingMapItem) => (tn as TreeNode).nodeName === hierarchy);
        }
        if (indexHierarchies === hierarchies.length - 1) {
          previousNode.children.push(wingMapItem);
        }
      });
    });
    this.hierarchyNodes = Array.from(hierarchyNodesMap.values());
  }

}


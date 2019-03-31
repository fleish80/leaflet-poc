import {WingMapItem} from '../../../core/models/items/wing-map.item';
import {TreeNode} from '../map-tree/tree-node.model';

const treeNodeIdPrefix = 'tree-node-';

export class MapListModel {

  alphabeticallyNodes: WingMapItem[];
  gatewayGroupNodes: TreeNode[];
  hierarchyNodes: TreeNode[];

  constructor(availableMaps?: WingMapItem[]) {
    this.alphabeticallyNodes = availableMaps.sort((map1: WingMapItem, map2: WingMapItem) => map1.mapName >= map2.mapName ? 1 : -1);
    this.setNodes();
  }

  setNodes() {
    const gatewayGroupNodeMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    const hierarchyNodesMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    this.alphabeticallyNodes.forEach((wingMapItem: WingMapItem, index: number) => {
      const gatewayGroupName = wingMapItem.gatewayGroup;
      if (!gatewayGroupNodeMap.has(gatewayGroupName)) {
        gatewayGroupNodeMap.set(gatewayGroupName, {id: `${treeNodeIdPrefix}${index}`, nodeName: gatewayGroupName, children: []});
      }
      const treeNode = gatewayGroupNodeMap.get(gatewayGroupName);
      treeNode.children.push(wingMapItem);

      const hierarchyName = wingMapItem.hierarchy || 'No Hierarchy';
      const hierarchies = hierarchyName.split('>');

      let previousNode;
      hierarchies.forEach((hierarchy: string, indexHierarchies: number) => {
        if (indexHierarchies === 0) {
          if (!hierarchyNodesMap.has(hierarchy)) {
            hierarchyNodesMap.set(hierarchy, {id: `${treeNodeIdPrefix}${index}-${indexHierarchies}`, nodeName: hierarchy, children: []});
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
    this.gatewayGroupNodes = Array.from(gatewayGroupNodeMap.values());
    this.hierarchyNodes = Array.from(hierarchyNodesMap.values());
  }

}


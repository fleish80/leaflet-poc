import {WingItem} from '../../../core/models/items/wing.item';

const treeNodeIdPrefix = 'tree-node-';

export interface TreeNode {
  id: string;
  nodeName: string;
  children: (TreeNode | WingItem)[];
}

export class MapListModel {

  alphabeticallyNodes: WingItem[];
  gatewayGroupNodes: TreeNode[];
  hierarchyNodes: TreeNode[];

  constructor(availableMaps?: WingItem[]) {
    this.alphabeticallyNodes = availableMaps.sort((map1: WingItem, map2: WingItem) => map1.mapName >= map2.mapName ? 1 : -1);
    this.setNodes();
  }

  setNodes() {
    const gatewayGroupNodeMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    const hierarchyNodesMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    this.alphabeticallyNodes.forEach((wingItem: WingItem, index: number) => {
      const gatewayGroupName = wingItem.gatewayGroup;
      if (!gatewayGroupNodeMap.has(gatewayGroupName)) {
        gatewayGroupNodeMap.set(gatewayGroupName, {id: `${treeNodeIdPrefix}${index}`, nodeName: gatewayGroupName, children: []});
      }
      const treeNode = gatewayGroupNodeMap.get(gatewayGroupName);
      treeNode.children.push(wingItem);

      const hierarchyName = wingItem.hierarchy || 'No Hierarchy';
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
          previousNode = previousNode.children.find((tn: TreeNode | WingItem) => (tn as TreeNode).nodeName === hierarchy);
        }
        if (indexHierarchies === hierarchies.length - 1) {
          previousNode.children.push(wingItem);
        }
      });
    });
    this.gatewayGroupNodes = Array.from(gatewayGroupNodeMap.values());
    this.hierarchyNodes = Array.from(hierarchyNodesMap.values());
  }

}


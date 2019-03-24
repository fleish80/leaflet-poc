import {WingItem} from '../../../core/models/items/wing.item';

export interface TreeNode {
  nodeName: string;
  children?: (TreeNode | WingItem)[];
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
    const gatewayGroupYreeNodeMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    const hierarchyNodesMap: Map<string, TreeNode> = new Map<string, TreeNode>();
    this.alphabeticallyNodes.forEach((wingItem: WingItem) => {
      const gatewayGroupName = wingItem.gatewayGroup;
      if (!gatewayGroupYreeNodeMap.has(gatewayGroupName)) {
        gatewayGroupYreeNodeMap.set(gatewayGroupName, {nodeName: gatewayGroupName, children: []});
      }
      const treeNode = gatewayGroupYreeNodeMap.get(gatewayGroupName);
      treeNode.children.push(wingItem);

      const hierarchyName = wingItem.hierarchy || 'No Hierarchy';
      const hierarchies = hierarchyName.split('>');

      let previousNode;
      hierarchies.forEach((hierarchy: string, index: number) => {
        if (index === 0) {
          if (!hierarchyNodesMap.has(hierarchy)) {
            hierarchyNodesMap.set(hierarchy, {nodeName: hierarchy, children: []});
          }
          previousNode = hierarchyNodesMap.get(hierarchy);
        } else {
          if (!previousNode.children.some((tn: TreeNode) => tn.nodeName === hierarchy)) {
            previousNode.children.push({nodeName: hierarchy, children: []});
          }
          previousNode = previousNode.children.find((tn: TreeNode | WingItem) => (tn as TreeNode).nodeName === hierarchy);
        }
        if (index === hierarchies.length - 1) {
          previousNode.children.push(wingItem);
        }
      });
    });
    this.gatewayGroupNodes = Array.from(gatewayGroupYreeNodeMap.values());
    this.hierarchyNodes = Array.from(hierarchyNodesMap.values());
  }

}


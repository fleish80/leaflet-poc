import {WingItem} from '../../../core/models/items/wing.item';

export interface TreeNode {
  nodeName: string;
  children: (TreeNode | WingItem)[];
}

export class MapListModel {

  alphabeticallyNodes: WingItem[];
  gatewayGroupNodes: TreeNode[];
  hierarchyNodes: TreeNode[];

  constructor(availableMaps?: WingItem[]) {
    this.alphabeticallyNodes = availableMaps.sort((map1: WingItem, map2: WingItem) => map1.mapName >= map2.mapName ? 1 : -1);
  }
}

import {WingMapItem} from '../../../core/models/items/wing-map.item';

export interface TreeNode {
  id: string;
  nodeName: string;
  key?: string;
  children: (TreeNode | WingMapItem)[];
}

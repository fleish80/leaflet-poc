import {WingItem} from '../../core/models/items/wing.item';



export class AssignMap {

  availableMaps: WingItem[];

  constructor(building?: any, availableMaps?: WingItem[]) {
    this.availableMaps = availableMaps.sort((map1: WingItem, map2: WingItem) => map1.mapName >= map2.mapName ? 1 : -1);
  }
}

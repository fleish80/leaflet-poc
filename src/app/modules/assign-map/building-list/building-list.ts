import {FloorItem} from '../../../core/models/items/floor.item';
import {BuildingItem} from '../../../core/models/items/building.item';
import {WingItem} from '../../../core/models/items/wing.item';
import {MapItem} from '../map-item/map-item.model';
import {mapListId} from '../map-list/map-list.model';

export class BuildingList {

  floorItems: FloorItem[];

  constructor(buildingItem: BuildingItem, buildMapIdsList: string[]) {
    this.floorItems = buildingItem.items as FloorItem[];
    this.setDropListConnectedTo(buildMapIdsList);
  }

  setDropListConnectedTo(buildMapIdsList: string[]) {
    buildMapIdsList.push(mapListId);
    this.floorItems.forEach(
      (floorItem: FloorItem) => {
        (floorItem.items as WingItem[])
          .filter((wingItem: WingItem) => !!wingItem.map)
          .forEach((wingItem: WingItem) => {
            const mapItem: MapItem = wingItem.map as MapItem;
            mapItem.cdkDropListConnectedTo = buildMapIdsList;
          });
      }
    );
  }

}

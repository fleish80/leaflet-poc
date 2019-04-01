import {FloorItem} from '../../../core/models/items/floor.item';
import {BuildingItem} from '../../../core/models/items/building.item';
import {WingItem} from '../../../core/models/items/wing.item';
import {MapItem} from '../map-item/map-item.model';
import {mapListId} from '../map-list/map-list.model';

export class BuildingList {

  buildingItem: BuildingItem;

  constructor(buildingItem: BuildingItem, buildMapIdsList: string[]) {
    this.buildingItem = buildingItem;
    this.setDropListConnectedTo(buildMapIdsList);
  }

  private setDropListConnectedTo(buildMapIdsList: string[]) {
    const dropListConnectedTo = [...buildMapIdsList, mapListId];
    (this.buildingItem.items as FloorItem[]).forEach(
      (floorItem: FloorItem) => {
        (floorItem.items as WingItem[])
          .filter((wingItem: WingItem) => !!wingItem.map)
          .forEach((wingItem: WingItem) => {
            const mapItem: MapItem = wingItem.map as MapItem;
            mapItem.cdkDropListConnectedTo = dropListConnectedTo;
          });
      }
    );
  }

}

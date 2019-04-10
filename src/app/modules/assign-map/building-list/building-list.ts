import {FloorItem} from '../../../core/models/items/floor.item';
import {BuildingItem} from '../../../core/models/items/building.item';
import {WingItem} from '../../../core/models/items/wing.item';
import {MapItem} from '../map-item/map-item.model';
import {mapListId} from '../map-list/map-list.model';

export class BuildingList {

  buildingItem: BuildingItem;
  selectedFloor: number;

  constructor(buildingItem: BuildingItem, buildMapIdsList: string[], selectedFloor: number) {
    this.buildingItem = buildingItem;
    this.selectedFloor = selectedFloor;
    this.setDropListConnectedTo(buildMapIdsList);
  }

  /**
   * Adds connected list into map item, neede for drag and drop
   * @param buildMapIdsList ids to connect
   */
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

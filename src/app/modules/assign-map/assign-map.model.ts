import {MapListModel} from './map-list/map-list.model';
import {BuildingItem} from '../../core/models/items/building.item';
import {FloorItem} from '../../core/models/items/floor.item';
import {WingItem} from '../../core/models/items/wing.item';
import {MapItem} from './map-item/map-item.model';
import {BuildingList} from './building-list/building-list';

export class AssignMap {

  buildingList: BuildingList;
  mapList: MapListModel;
  buildMapIdsList: string[];

  constructor(data: { building: BuildingItem, availableMaps: MapItem[] }) {
    // this.buildingItem = data.building;
    const buildMapIdsList: string[] = this.getBuildMapIdsList(data.building);
    this.mapList = new MapListModel(data.availableMaps, buildMapIdsList);
    this.buildingList = new BuildingList(data.building, buildMapIdsList);
  }

  getBuildMapIdsList(buildingItem: BuildingItem): string[] {
    const buildMapIdsList = (buildingItem.items as FloorItem[]).map(
      (floorItem: FloorItem) => {
        return (floorItem.items as WingItem[])
          .filter((wingItem: WingItem) => !wingItem.map)
          .map((wingItem: WingItem) => wingItem.id);
      }
    );
    return [].concat(...buildMapIdsList);
  }

}

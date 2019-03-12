import {Injectable} from '@angular/core';
import {appSettingsConfig} from '../../configs/app-settings.config';
import {ViewMapModel} from './view-map.model';
import {interval, Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {ViewMapServerModel} from './view-map-server.model';
import {ZoneItem} from '../../core/models/map/zone-item';
import {PointData} from '../../core/models/map/point-data';
import {MapData} from '../../core/models/map/map-data';
import {ImageItem} from '../../core/models/map/image-item';


const height = 2064;
const width = 3180;

const mapData: MapData = {
  mapWidth: width,
  mapHeight: height,
  mapImageURL: `${appSettingsConfig.IMAGES_PATH}/map-4.gif`
};

@Injectable()
export class ViewMapService {

  constructor() {
  }

  getMap(): Observable<ViewMapModel> {
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => {
        const serverData: ViewMapServerModel = {
          mapData,
          items: [...this.generateZoneItems(), ...this.generateImageItems()]
        };
        return of<ViewMapServerModel>(serverData).pipe(
          map((viewMapServer: ViewMapServerModel) => {
            return new ViewMapModel(viewMapServer);
          })
        );
      })
    );
  }

  private generateZoneItems(): ZoneItem[] {
    return Array.from(Array(10).keys()).map(() => {
      const randomY = Math.random() * width;
      const randomX = Math.random() * height;
      const points: PointData[] = [
        {x: randomX - 200, y: randomY},
        {x: randomX, y: randomY},
        {x: randomX, y: randomY + 200}
      ];
      return {
        pointsOnMap: points,
        id: 'zone-0',
        itemBackground: '#' + Math.random().toString(16).substr(-6)
      } as ZoneItem;
    });

  }

  private generateImageItems(): ImageItem[] {
    return Array.from(Array(100).keys()).map(() => {
      const randomY = Math.random() * width;
      const randomX = Math.random() * height;
      const point: PointData = {x: randomX, y: randomY};
      return {
        id: 'fixed-0',
        imageLocation: point,
        imageUrl: `${appSettingsConfig.IMAGES_PATH}/house.ico`,
        width: 50,
        height: 40
      } as ImageItem;
    });
  }


}

import {Injectable} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {circle, marker, polygon} from 'leaflet';
import {assets} from './assets';
import {StructureMap} from './structure-map/structure-map';
import {appSettingsConfig} from '../../configs/app-settings.config';
import {ImageService} from '../../core/services/image/image.service';
import {map} from 'rxjs/operators';

@Injectable()
export class InteractiveMapService {

  constructor(private imageService: ImageService) {
  }

  /**
   * Retrieves map layers array
   */
  getLayers(): Observable<StructureMap> {
    const imageUrl = `${appSettingsConfig.IMAGES_PATH}/map.png`;
    const layers = [
      polygon([[0, 0], [300, 300], [46.87, 121.8]], {color: '#bbb111'}),
      circle([400, 400], {radius: 50}).bindTooltip('Zone 1',
        {permanent: true, direction: 'center'}),
      marker([250, 700], {icon: assets.house})];
    return forkJoin(this.imageService.getSize(imageUrl), of(layers)).pipe(
      map(([imgSize, layerArr]) => {
        return new StructureMap(imageUrl, layerArr, imgSize);
      }));
  }
}

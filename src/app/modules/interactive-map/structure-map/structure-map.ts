import {Layer} from 'leaflet';
import {ImgSize} from '../../../core/services/image/imgSize';

export class StructureMap {

  imageUrl: string;
  layers: Layer[];
  imgSize: ImgSize;

  constructor(imageUrl: string, layers: Layer[], imgSize: ImgSize) {
    this.imageUrl = imageUrl;
    this.layers = layers;
    this.imgSize = imgSize;
  }
}

import {Injectable} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {ImgSize} from './imgSize';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
  }

  /**
   * Retrieves width and height of the image
   * @param imgSrc - image source path
   */
  getSize(imgSrc: string): Observable<ImgSize> {
    const image = new Image();
    const imgLoader$ = fromEvent(image, 'load').pipe(
      take(1),
      map((event: any): ImgSize => {
        return {
          width: event.target.width,
          height: event.target.height
        };
      }));
    image.src = imgSrc;
    return imgLoader$;
  }
}

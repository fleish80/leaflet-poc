import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from '../../services/translate/translate.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: string): Observable<string> {
    return this.translateService.get().pipe(
      map(( translateMap: Map<string, string>) => {
        let res = value;
        if (translateMap.has(value)) {
          res = translateMap.get(value);
        }
        return res;
      }));
  }

}

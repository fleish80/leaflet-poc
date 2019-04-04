import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../../services/translate/translate.service';
import {Observable} from 'rxjs';

@Pipe({
  name: 'trans'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(key: string): Observable<string> {
    return this.translateService.getTranslation(key);
  }

}

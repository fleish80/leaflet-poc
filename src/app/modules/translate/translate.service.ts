import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translate} from '../../core/models/tranlsate/translate.model';
import {map} from 'rxjs/operators';
import {CacheRegistrationService} from '../../core/services/cache-registration/cache-registration.service';


export const translateUrl = '/asset-manager-web/rest/translations-retriever-rest';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient, private cacheRegistrationService: CacheRegistrationService) {
    cacheRegistrationService.addToCache(`${translateUrl}/get-translations`);
  }

  private getTranslations(): Observable<Map<string, string>> {
    const url = `${translateUrl}/get-translations`;
    return this.http.get(url).pipe(
      map((data: { translations: Translate[] }) =>
        new Map<string, string>(data.translations.map((translate: Translate) => ([translate.key, translate.value] as [string, string])))
      ));
  }

  getTranslation(key: string): Observable<string> {
    return this.getTranslations().pipe(
      map((translateMap: Map<string, string>) => {
        let res = key;
        if (translateMap.has(key)) {
          res = translateMap.get(key);
        }
        return res;
      }));
  }
}

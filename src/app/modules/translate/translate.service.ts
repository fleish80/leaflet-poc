import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translate} from './translate.model';
import {map} from 'rxjs/operators';
import {CacheRegistrationService} from '../../core/services/cache-registration/cache-registration.service';

export const translateUrl = '/asset-manager-web/rest/translations-retriever-rest';
export const getTranslate = 'get-translations';

/**
 * Finds relevant translation value by translation key
 */
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient, private cacheRegistrationService: CacheRegistrationService) {
    cacheRegistrationService.addToCache(`${translateUrl}/${getTranslate}`);
  }

  /**
   * Retreives translation value by translation key, return same key if value has not found
   * @param key translation to find the value
   */
  getTranslation(key: string): Observable<string> {
    const url = `${translateUrl}/${getTranslate}`;
    return this.http.get(url).pipe(
      map(({translations}: { translations: Translate[] }) => {
        let res = key;
        const translation = translations.find((t: Translate) => t.key === key);
        if (translation) {
          res = translation.value;
        }
        return res;
      }));
  }
}

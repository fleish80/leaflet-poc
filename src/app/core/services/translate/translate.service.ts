import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translate} from '../../models/tranlsate/translate.model';
import {map} from 'rxjs/operators';
import {CacheRegistrationService} from '../cache-registration/cache-registration.service';


// const translateUrl = 'http://localhost/asset-manager-web/rest/translations-retriever-rest/get-translations';
const translateUrl = '/assets/mocks/translate/translate.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient, private cacheRegistrationService: CacheRegistrationService) {
    cacheRegistrationService.addToCache(translateUrl);
  }

  get(): Observable<Map<string, string>> {
    return this.http.get(translateUrl).pipe(
      map((data: { translations: Translate[] }) =>
        new Map<string, string>(data.translations.map((translate: Translate) => ([translate.key, translate.value] as [string, string])))
      ));
  }
}

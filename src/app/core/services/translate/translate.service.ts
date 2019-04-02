import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Translate} from '../../models/tranlsate/translate.model';
import {map} from 'rxjs/operators';


const tranlsateUrl = 'http://localhost/asset-manager-web/rest/translations-retriever-rest/get-translations';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Map<string, string>> {
    return this.http.get<Translate[]>(tranlsateUrl).pipe(
      map((translates: Translate[]) =>
        new Map<string, string>(translates.map((translate: Translate) => ([translate.key, translate.value] as [string, string])))
      ));
  }
}

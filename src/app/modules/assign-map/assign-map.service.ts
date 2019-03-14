import {Injectable} from '@angular/core';
import {AssignMap} from './assign-map.model';
import {Observable, of} from 'rxjs';

const assignMap: AssignMap = {
  availableMaps: [
    {
      id: 'MAP_3',
      mapName: 'Floor 5',
    },
    {
      id: 'MAP_2',
      mapName: 'Floor 6 HW'
    },
    {
      id: 'MAP_1',
      mapName: 'Floor 6 SW'
    }
  ]
};


@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor() {
  }

  get(): Observable<AssignMap> {
    return of(assignMap);
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AssignMap} from './assign-map.model';
import {AssignMapService} from './assign-map.service';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  selector: 'mv-assign-map',
  templateUrl: './assign-map.component.html',
  styleUrls: ['./assign-map.component.scss']
})
export class AssignMapComponent implements OnInit {

  assignMap$: Observable<AssignMap>;
  assignMapState: AssignMap = new AssignMap();

  constructor(private assignMapService: AssignMapService) {
  }

  ngOnInit() {
    this.assignMap$ = this.assignMapService.load().pipe(
      tap((assignMap: AssignMap) => this.assignMapState = assignMap),
      catchError((error) => {
        console.error(error);
        return of(this.assignMapState);
      }));
  }

  remove(mapId: string) {
    this.assignMap$ = this.assignMapService.remove(mapId).pipe(
      tap((assignMap: AssignMap) => this.assignMapState = assignMap),
      catchError((error) => {
        console.error(error);
        return of(this.assignMapState);
      })
    );
  }

  assign({mapId, wingId, fromList}: { mapId: string, wingId: string, fromList: boolean }) {
    this.assignMap$ = this.assignMapService.assign(mapId, wingId, fromList).pipe(
      tap((assignMap: AssignMap) => this.assignMapState = assignMap),
      catchError((error) => {
        console.error(error);
        return of(this.assignMapState);
      })
    );
  }

}

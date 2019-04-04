import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AssignMap} from './assign-map.model';
import {AssignMapService} from './assign-map.service';

@Component({
  selector: 'mv-assign-map',
  templateUrl: './assign-map.component.html',
  styleUrls: ['./assign-map.component.scss']
})
export class AssignMapComponent implements OnInit {

  assignMap$: Observable<AssignMap>;

  constructor(private assignMapService: AssignMapService) {
  }

  ngOnInit() {
    this.assignMap$ = this.assignMapService.load();
  }

  removeMap(mapId: string) {
    this.assignMap$ = this.assignMapService.remove(mapId);
  }

  assignMap(mapId, wingId, formList) {
    this.assignMap$ = this.assignMapService.assign(mapId, wingId, formList);
  }
}

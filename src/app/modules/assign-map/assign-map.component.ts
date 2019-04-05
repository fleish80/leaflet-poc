import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AssignMap} from './assign-map.model';
import {AssignMapService} from './assign-map.service';
import {BuildingItem} from '../../core/models/items/building.item';
import {MapItem} from './map-item/map-item.model';

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

  remove(mapId: string) {
    this.assignMap$ = this.assignMapService.remove(mapId);
  }

  assign({mapId, wingId, fromList}: { mapId: string, wingId: string, fromList: boolean }) {
    this.assignMap$ = this.assignMapService.assign(mapId, wingId, fromList);
  }
}

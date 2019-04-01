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

  constructor(private assignMapService: AssignMapService, @Inject('window') private window: Window) {
  }

  ngOnInit() {
    console.log(this.window);
    const mapId = (this.window.parent as any).frommap_getSelectedBuilding();
    const wingId = (this.window.parent as any).frommap_getSelectedFloor();
    this.assignMap$ = this.assignMapService.get(mapId, wingId);
  }
}

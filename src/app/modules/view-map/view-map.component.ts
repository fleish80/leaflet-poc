import {Component, OnInit} from '@angular/core';
import {ViewMapService} from './view-map.service';
import {ViewMapModel} from './view-map.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'mv-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss']
})
export class ViewMapComponent implements OnInit {

  viewMapModel$: Observable<ViewMapModel>;

  constructor(private viewMapService: ViewMapService) {
  }

  ngOnInit() {
    this.viewMapModel$ = this.viewMapService.getMap();
  }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AssignMapModel} from './assign-map.model';
import {AssignMapService} from './assign-map.service';

@Component({
  selector: 'mv-assign-map',
  templateUrl: './assign-map.component.html',
  styleUrls: ['./assign-map.component.scss']
})
export class AssignMapComponent implements OnInit {

  assignMap$: Observable<AssignMapModel>;

  constructor(private assignMapService: AssignMapService) {
  }

  ngOnInit() {
    this.assignMap$ = this.assignMapService.get();
  }
}

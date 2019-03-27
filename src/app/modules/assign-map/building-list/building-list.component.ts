import { Component, OnInit } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {WingItem} from '../../../core/models/items/wing.item';

@Component({
  selector: 'mv-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any>) {
    console.log('previousIndex = ', event.previousIndex);
    console.log('id = ', event.previousContainer.id);
  }
}

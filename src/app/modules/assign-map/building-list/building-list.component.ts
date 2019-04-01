import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {BuildingList} from './building-list';

@Component({
  selector: 'mv-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {

  @Input() buildingList: BuildingList;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any>) {
    console.log('previousIndex = ', event.previousIndex);
    console.log('id = ', event.previousContainer.id);
  }
}

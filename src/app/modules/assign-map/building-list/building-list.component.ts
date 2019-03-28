import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {WingItem} from '../../../core/models/items/wing.item';
import {BuildingItem} from '../../../core/models/items/building.item';

@Component({
  selector: 'mv-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {

  @Input() buildingItem: BuildingItem;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any>) {
    console.log('previousIndex = ', event.previousIndex);
    console.log('id = ', event.previousContainer.id);
  }
}

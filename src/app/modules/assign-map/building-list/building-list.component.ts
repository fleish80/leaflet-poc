import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {BuildingList} from './building-list';
import {mapListId} from '../map-list/map-list.model';

@Component({
  selector: 'mv-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingListComponent implements OnInit {

  @Input() buildingList: BuildingList;
  @Output() assign = new EventEmitter<{ mapId: string, wingId: string, fromList: boolean }>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Drop event, activated on dragging the map into drag zone
   * @param event drag an drop
   * @param wingId wing id
   */
  drop(event: CdkDragDrop<any>, wingId: string) {
    const previousContainer = event.previousContainer;
    const mapId: string = previousContainer.id;
    const connectedToList: string[] = previousContainer.connectedTo as string[];
    const fromList: boolean = !connectedToList.includes(mapListId);
    this.assign.emit({mapId, wingId, fromList});
  }

  /**
   * Just needed to remove the cdk-drop-list-dragging class, does not do anything internally.
   */
  exited() {
  }
}

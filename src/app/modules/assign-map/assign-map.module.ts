import {NgModule} from '@angular/core';
import {AssignMapRoutingModule} from './assign-map-routing.module';
import {AssignMapComponent} from './assign-map.component';
import {SharedModule} from '../../shared/shared.module';
import {MapListComponent} from './map-list/map-list.component';
import {MaterialModule} from '../../shared/material.module';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BuildingListComponent} from './building-list/building-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MapItemComponent} from './map-item/map-item.component';
import {MapTreeComponent} from './map-tree/map-tree.component';

@NgModule({
  declarations: [AssignMapComponent, MapListComponent, DragDropComponent, BuildingListComponent, MapItemComponent, MapTreeComponent],
  imports: [
    SharedModule,
    AssignMapRoutingModule,
    MaterialModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [HttpClient]
})
export class AssignMapModule { }

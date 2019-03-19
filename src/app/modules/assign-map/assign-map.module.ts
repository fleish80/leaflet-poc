import {NgModule} from '@angular/core';
import {AssignMapRoutingModule} from './assign-map-routing.module';
import {AssignMapComponent} from './assign-map.component';
import {SharedModule} from '../../shared/shared.module';
import { MapListComponent } from './map-list/map-list.component';
import {MaterialModule} from '../../shared/material.module';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BuildingListComponent } from './building-list/building-list.component';

@NgModule({
  declarations: [AssignMapComponent, MapListComponent, DragDropComponent, BuildingListComponent],
  imports: [
    SharedModule,
    AssignMapRoutingModule,
    MaterialModule,
    DragDropModule
  ]
})
export class AssignMapModule { }

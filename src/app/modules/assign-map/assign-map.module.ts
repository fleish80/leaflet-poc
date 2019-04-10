import {NgModule} from '@angular/core';
import {AssignMapRoutingModule} from './assign-map-routing.module';
import {AssignMapComponent} from './assign-map.component';
import {SharedModule} from '../../shared/shared.module';
import {MapListComponent} from './map-list/map-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BuildingListComponent} from './building-list/building-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MapItemComponent} from './map-item/map-item.component';
import {MapTreeComponent} from './map-tree/map-tree.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';
import {OverlayPanelModule} from 'primeng/primeng';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  declarations: [AssignMapComponent, MapListComponent, BuildingListComponent, MapItemComponent, MapTreeComponent],
  imports: [
    SharedModule,
    AssignMapRoutingModule,
    DragDropModule,
    HttpClientModule,
    DragDropModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    OverlayPanelModule,
    OrderModule
  ],
  providers: [HttpClient]
})
export class AssignMapModule { }

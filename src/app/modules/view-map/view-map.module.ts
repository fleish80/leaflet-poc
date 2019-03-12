import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewMapComponent} from './view-map.component';
import {ViewMapRoutingModule} from './view-map-routing.module';
import {BuildingMapComponent} from './building-map/building-map.component';
import {ViewMapService} from './view-map.service';
import {MvLeafletModule} from '../../shared/mv-leaflet/mv-leaflet.module';

@NgModule({
  declarations: [ViewMapComponent, BuildingMapComponent],
  imports: [
    CommonModule,
    ViewMapRoutingModule,
    MvLeafletModule
  ],
  providers: [ViewMapService]
})
export class ViewMapModule {
}

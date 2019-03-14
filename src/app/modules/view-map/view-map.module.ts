import {NgModule} from '@angular/core';
import {ViewMapComponent} from './view-map.component';
import {ViewMapRoutingModule} from './view-map-routing.module';
import {BuildingMapComponent} from './building-map/building-map.component';
import {ViewMapService} from './view-map.service';
import {MvLeafletModule} from '../../shared/mv-leaflet.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ViewMapComponent, BuildingMapComponent],
  imports: [
    SharedModule,
    ViewMapRoutingModule,
    MvLeafletModule
  ],
  providers: [ViewMapService]
})
export class ViewMapModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InteractiveMapRoutingModule} from './interactive-map-routing.module';
import {InteractiveMapComponent} from './interactive-map.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {StructureMapComponent} from './structure-map/structure-map.component';
import {InteractiveMapService} from './interactive-map.service';
import {MvLeafletModule} from '../../shared/mv-leaflet/mv-leaflet.module';

@NgModule({
  declarations: [InteractiveMapComponent, SidebarComponent, StructureMapComponent],
  imports: [
    CommonModule,
    InteractiveMapRoutingModule,
    MvLeafletModule
],
  providers: [InteractiveMapService]
})
export class InteractiveMapModule {
}

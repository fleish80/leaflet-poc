import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Map} from 'leaflet';
import {InteractiveMapService} from './interactive-map.service';
import {StructureMap} from './structure-map/structure-map';
import {Observable} from 'rxjs';
import {SidebarComponent} from './sidebar/sidebar.component';


@Component({
  selector: 'mv-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  structureMap$: Observable<StructureMap>;
  map: Map;
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(private interactiveMapService: InteractiveMapService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.structureMap$ = this.interactiveMapService.getLayers();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.cd.detectChanges();
  }

  mapClick() {
    this.sidebar.toggle();
  }
}

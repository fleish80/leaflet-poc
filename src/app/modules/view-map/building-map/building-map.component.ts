import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Map} from 'leaflet';
import {LeafletMap} from '../../../core/models/map-details/leaflet.map';

@Component({
  selector: 'mv-building-map',
  templateUrl: './building-map.component.html',
  styleUrls: ['./building-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingMapComponent implements OnInit {

  @Input() leafletData: LeafletMap;

  constructor() { }

  ngOnInit() {
  }


  onMapReady(map: Map) {
    map.fitBounds(this.leafletData.bounds);
    map.setMaxBounds(this.leafletData.bounds);
  }

}

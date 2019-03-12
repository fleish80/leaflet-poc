import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {LeafletData} from '../../../core/models/map/leaflet-data';
import {Map} from 'leaflet';

@Component({
  selector: 'mv-building-map',
  templateUrl: './building-map.component.html',
  styleUrls: ['./building-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingMapComponent implements OnInit {

  @Input() leafletData: LeafletData;

  constructor() { }

  ngOnInit() {
  }


  onMapReady(map: Map) {
    map.fitBounds(this.leafletData.bounds);
    map.setMaxBounds(this.leafletData.bounds);
  }

}

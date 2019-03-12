import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StructureMap} from './structure-map';
import {Control, CRS, FeatureGroup, featureGroup, imageOverlay, LatLngBoundsExpression, Map, MapOptions} from 'leaflet';

@Component({
  selector: 'mv-structure-map',
  templateUrl: './structure-map.component.html',
  styleUrls: ['./structure-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureMapComponent implements OnInit {

  @Input() structureMap: StructureMap;
  @Output() mapReady = new EventEmitter<Map>();
  @Output() mapClick = new EventEmitter();

  renderMap = false;
  options: MapOptions;
  drawConstructorOptions: Control.DrawConstructorOptions;
  bounds: LatLngBoundsExpression;
  group: FeatureGroup;

  constructor() {
  }

  ngOnInit() {
    const imgSize = this.structureMap.imgSize;
    this.bounds = [[0, 0], [imgSize.height, imgSize.width]];

    const io = imageOverlay(this.structureMap.imageUrl, this.bounds);
    this.options = {
      layers: [
        io
      ],
      minZoom: -3,
      maxZoom: 3,
      crs: CRS.Simple,
      attributionControl: false
    };
    this.group = featureGroup(this.structureMap.layers);
    this.drawConstructorOptions = {
      draw: {
        polyline: false,
        circlemarker: false,
        marker: false
      },
      edit: {
        featureGroup: this.group
      }
    };
  }

  onMapReady(map: Map) {
    map.fitBounds(this.bounds);
    map.setMaxBounds(this.bounds);
    this.group.addTo(map);
    this.mapReady.emit(map);
  }

  onMapClick() {
    this.mapClick.emit();
  }

}

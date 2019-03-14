import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {WingItem} from '../../../core/models/map/wing.item';

@Component({
  selector: 'mv-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnInit {

  @Input() wingMapItems: WingItem[];

  constructor() { }

  ngOnInit() {
  }

}

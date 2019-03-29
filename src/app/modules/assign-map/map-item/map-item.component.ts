import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {WingItem} from '../../../core/models/items/wing.item';
import {WingMapItem} from '../../../core/models/items/wing-map.item';

@Component({
  selector: 'mv-map-item',
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapItemComponent implements OnInit {

  @Input() wingMapItem: WingMapItem;
  @Input() connectToDropList: string[];

  constructor() { }

  ngOnInit() {
  }

}

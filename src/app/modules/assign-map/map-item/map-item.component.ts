import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {WingItem} from '../../../core/models/items/wing.item';

@Component({
  selector: 'mv-map-item',
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapItemComponent implements OnInit {

  @Input() wingItem: WingItem;

  constructor() { }

  ngOnInit() {
  }

}

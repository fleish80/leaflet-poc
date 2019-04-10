import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MapItem} from './map-item.model';

@Component({
  selector: 'mv-map-item',
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapItemComponent {

  @Input() mapItem: MapItem;
  popupOpen = false;

  /**
   * Showes the popover
   */
  onShow() {
    this.popupOpen = true;
  }

  /**
   * Hides the popover
   */
  onHide() {
    this.popupOpen = false;
  }


}

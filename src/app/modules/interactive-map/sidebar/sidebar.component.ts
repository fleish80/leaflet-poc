import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import 'leaflet-sidebar-v1';
import {Control, Map, control} from 'leaflet';

@Component({
  selector: 'mv-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  @Input() map: Map;
  sidebar: Control.SidebarControl;

  constructor() {
  }

  ngOnInit() {
    this.sidebar = control.sidebar('sidebar', {
      position: 'right',
      closeButton: false,
      autoPan: false
    }).addTo(this.map);
  }

  toggle() {
    this.sidebar.toggle();
  }

}

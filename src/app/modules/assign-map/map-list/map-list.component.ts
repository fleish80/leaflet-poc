import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {WingItem} from '../../../core/models/map/wing.item';
import {SortingState} from './sorting-state.enum';
import {FormControl} from '@angular/forms';
import {SortingOptions} from './sorting-options.array';

@Component({
  selector: 'mv-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnInit {

  @Input() wingMapItems: WingItem[];
  sortCtrl: FormControl;
  sortingState = SortingState;
  sortingOptions = SortingOptions;

  constructor() { }

  ngOnInit() {
    this.sortCtrl = new FormControl(SortingState.Hierarchy);
  }

}
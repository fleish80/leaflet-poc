import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SortingState} from './sorting-state.enum';
import {FormControl} from '@angular/forms';
import {SortingOptions} from './sorting-options.array';
import {MapListModel, TreeNode} from './map-list.model';
import {Subscription} from 'rxjs';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {WingItem} from '../../../core/models/items/wing.item';

@Component({
  selector: 'mv-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnInit, OnDestroy {

  @Input() mapList: MapListModel;
  sortCtrl: FormControl;
  sortingState = SortingState;
  currentSortingState = SortingState.Alphabetically;
  sortingOptions = SortingOptions;
  subscription = new Subscription();
  treeControl: NestedTreeControl<TreeNode>;
  dataSource: ArrayDataSource<TreeNode>;
  hasChild: (_: number, TreeNode) => boolean;

  constructor() {
  }

  ngOnInit() {
    this.treeControl = new NestedTreeControl<TreeNode>((node: any) => node.children);
    this.dataSource = new ArrayDataSource(this.mapList.hierarchyNodes);
    this.hasChild =  (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
    this.setSortCtrl();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  setSortCtrl() {
    this.sortCtrl = new FormControl(this.currentSortingState);
    this.subscription.add(
      this.sortCtrl.valueChanges.subscribe((sortingState: SortingState) => {
        console.log(sortingState);
      }));
  }

}

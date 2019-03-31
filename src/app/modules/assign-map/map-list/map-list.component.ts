import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SortingState} from './sorting-state.enum';
import {FormControl} from '@angular/forms';
import {mapListId, MapListModel} from './map-list.model';
import {Subscription} from 'rxjs';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TreeNode} from '../map-tree/tree-node.model';

const SortingOptions = [
  {
    state: SortingState.Alphabetically,
    text: 'Alphabetically'
  },
  {
    state: SortingState.Hierarchy,
    text: 'Hierarchy'
  },
  {
    state: SortingState.GatewayGroup,
    text: 'Gateway Group'
  },
];

@Component({
  selector: 'mv-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnChanges, OnDestroy {

  @Input() mapList: MapListModel;
  sortCtrl: FormControl;
  treeNodes: TreeNode[];
  sortingOptions = SortingOptions;
  subscription = new Subscription();
  mapListId = mapListId;
  private treeNodesMap: Map<SortingState, TreeNode[] | null>;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mapList && (changes.mapList.previousValue !== changes.mapList.currentValue)) {
      this.treeNodesMap = new Map<SortingState, TreeNode[] | null>([
        [SortingState.Alphabetically, null],
        [SortingState.Hierarchy, this.mapList.hierarchyNodes],
        [SortingState.GatewayGroup, this.mapList.gatewayGroupNodes]
      ]);
      this.setSortCtrl(SortingState.Hierarchy);
      this.setSortingState(SortingState.Hierarchy);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setSortCtrl(sortingState: SortingState) {
    this.sortCtrl = new FormControl(sortingState);
    this.subscription.add(
      this.sortCtrl.valueChanges.subscribe((ss: SortingState) => {
        this.setSortingState(ss);
      }));
  }

  setSortingState(sortingState: SortingState) {
    this.treeNodes = this.treeNodesMap.get(sortingState);
  }

  drop(event: CdkDragDrop<any>) {
    console.log('dragged to map-list with id = ', event.previousContainer.id);
  }

  /**
   * Just needed to remove the cdk-drop-list-dragging class, does not do anything internally
   */
  exited() {
  }

}

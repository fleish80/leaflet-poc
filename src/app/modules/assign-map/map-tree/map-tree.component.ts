import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {TreeNode} from './tree-node.model';
import {WingMapItem} from '../../../core/models/items/wing-map.item';

@Component({
  selector: 'mv-map-tree',
  templateUrl: './map-tree.component.html',
  styleUrls: ['./map-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapTreeComponent implements OnChanges {

  @Input() treeNodes: TreeNode[];
  @Input() data: WingMapItem[];
  treeControl: NestedTreeControl<TreeNode>;
  dataSource: ArrayDataSource<TreeNode>;
  hasChild: (_: number, TreeNode) => boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.treeNodes && (changes.treeNodes.previousValue !== changes.treeNodes.currentValue)) {
      this.treeControl = new NestedTreeControl<TreeNode>((node: any) => node.children);
      this.dataSource = new ArrayDataSource(this.treeNodes);
      this.hasChild =  (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
      this.treeControl.dataNodes = this.treeNodes;
      this.treeControl.expandAll();
    }
  }

}

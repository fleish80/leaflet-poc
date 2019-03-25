import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TreeNode} from '../map-list/map-list.model';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';

@Component({
  selector: 'mv-map-tree',
  templateUrl: './map-tree.component.html',
  styleUrls: ['./map-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapTreeComponent implements OnChanges {

  @Input() treeNodes: TreeNode[];
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
    }
  }

}

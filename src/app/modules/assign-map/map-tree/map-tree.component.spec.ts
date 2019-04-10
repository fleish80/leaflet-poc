import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MapTreeComponent} from './map-tree.component';
import {OrderModule} from 'ngx-order-pipe';
import {TranslateModule} from '../../translate/translate.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayPanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatIconModule} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MapItemComponent} from '../map-item/map-item.component';
import {SimpleChange} from '@angular/core';

describe('MapTreeComponent', () => {
  let component: MapTreeComponent;
  let fixture: ComponentFixture<MapTreeComponent>;
  let mapTreeData;

  beforeEach(async(() => {
    mapTreeData = require('./map-tree.json');
    TestBed.configureTestingModule({
      declarations: [MapTreeComponent, MapItemComponent],
      imports: [OrderModule,
        TranslateModule,
        DragDropModule,
        OverlayPanelModule,
        HttpClientModule,
        MatFormFieldModule,
        CdkTreeModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTreeComponent);
    component = fixture.componentInstance;
    component.treeNodes = mapTreeData;
    component.ngOnChanges(
      {
        treeNodes: new SimpleChange(null, component.treeNodes, true)
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init details', () => {
    expect(component.treeControl.dataNodes).toBeDefined();
    expect(component.dataSource).toBeDefined();
    expect(component.hasChild).toBeDefined();
  });
});

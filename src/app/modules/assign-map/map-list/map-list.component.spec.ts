import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MapListComponent} from './map-list.component';
import {OrderModule} from 'ngx-order-pipe';
import {TranslateModule} from '../../translate/translate.module';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayPanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MapItemComponent} from '../map-item/map-item.component';
import {MapTreeComponent} from '../map-tree/map-tree.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleChange} from '@angular/core';
import {SortingState} from './sorting-state.enum';

describe('MapListComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;
  let mapListData;

  beforeEach(async(() => {
    mapListData = require('./map-list-processed.json');
    TestBed
      .configureTestingModule({
        declarations: [MapListComponent, MapItemComponent, MapTreeComponent],
        imports: [OrderModule,
          TranslateModule,
          DragDropModule,
          OverlayPanelModule,
          HttpClientModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatOptionModule,
          MatSelectModule,
          CdkTreeModule,
          MatIconModule,
          BrowserAnimationsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListComponent);
    component = fixture.componentInstance;
    component.mapList = mapListData;
    component.ngOnChanges(
      {
        mapList: new SimpleChange(null, component.mapList, true)
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update tree node', () => {
    expect(component.treeNodes).toEqual(mapListData.hierarchyNodes);
  });

  it('should update tree node to gateway group', () => {
    component.setSortingState(SortingState.GatewayGroup);
    expect(component.treeNodes).toEqual(mapListData.gatewayGroupNodes);
  });

  it('should update tree node to nullp', () => {
    component.setSortingState(SortingState.Alphabetically);
    expect(component.treeNodes).toBeNull();
  });

  it('should drag', () => {
    spyOn(component.remove, 'emit');
    const event = {
      previousContainer: {
        id: 'mapId',
      }
    } as CdkDragDrop<any>;
    component.drop(event);
    expect(component.remove.emit).toHaveBeenCalledWith('mapId');
  });

});

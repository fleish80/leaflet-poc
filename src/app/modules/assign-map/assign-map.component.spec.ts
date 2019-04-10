import {async, ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import {AssignMapComponent} from './assign-map.component';
import {BuildingListComponent} from './building-list/building-list.component';
import {MapListComponent} from './map-list/map-list.component';
import {SpinnerModule} from '../spinner/spinner.module';
import {OrderModule} from 'ngx-order-pipe';
import {ScrollModule} from '../scroll/scroll.module';
import {MapItemComponent} from './map-item/map-item.component';
import {TranslateModule} from '../translate/translate.module';
import {MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MapTreeComponent} from './map-tree/map-tree.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayPanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {windowFactory} from '../../app.module';
import {of, throwError} from 'rxjs';
import {AssignMap} from './assign-map.model';
import {AssignMapService} from './assign-map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateService} from '../translate/translate.service';

describe('AssignMapComponent', () => {
  let component: AssignMapComponent;
  let fixture: ComponentFixture<AssignMapComponent>;
  let windowMock: Window;
  let mockAsignMapService;
  let mockTranslateService;
  let assignMapData;

  beforeEach(async(() => {
    windowMock = {
      parent: jasmine.createSpyObj([
        'frommap_getEditedCampus',
        'frommap_getSelectedBuilding',
        'frommap_getSelectedFloor'
      ])
    } as any;
    mockAsignMapService = jasmine.createSpyObj(['load', 'remove', 'assign']);
    mockTranslateService = jasmine.createSpyObj(['getTranslation']);
    assignMapData = require('./assign-map-proccessed.json');
    TestBed.configureTestingModule({
      declarations: [AssignMapComponent, BuildingListComponent, MapListComponent, MapItemComponent, MapTreeComponent],
      imports: [SpinnerModule,
        OrderModule,
        ScrollModule,
        TranslateModule,
        MatTableModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        CdkTreeModule,
        DragDropModule,
        OverlayPanelModule,
        MatIconModule,
        HttpClientModule,
        BrowserAnimationsModule],
      providers: [{
        provide: 'window', useFactory: (() => {
          return windowMock;
        })
      },
        {provide: AssignMapService, useValue: mockAsignMapService},
        {provide: TranslateService, useValue: mockTranslateService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignMapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('init data', () => {
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    expect(component.assignMap$).toBeDefined();
    expect(component.assignMapState).toBeDefined();
  });

  it('should load data', fakeAsync(() => {
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(component.assignMapState).toEqual(assignMapData);
    });
    flush();
    expect(mockAsignMapService.load).toHaveBeenCalled();
  }));

  it('should catch error in load data', fakeAsync(() => {
    spyOn(console, 'error');
    mockAsignMapService.load.and.returnValue(throwError(''));
    fixture.detectChanges();
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    });
    flush();
  }));

  it('should remove data', fakeAsync(() => {
    mockAsignMapService.remove.and.returnValue(of(assignMapData));
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    component.remove('mapId');
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(component.assignMapState).toEqual(assignMapData);
    });
    flush();
    expect(mockAsignMapService.remove).toHaveBeenCalledWith('mapId');
  }));

  it('should catch error in remove data', fakeAsync(() => {
    spyOn(console, 'error');
    mockAsignMapService.remove.and.returnValue(throwError(''));
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    component.remove('mapId');
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    });
    flush();
  }));

  it('should assign data', fakeAsync(() => {
    mockAsignMapService.assign.and.returnValue(of(assignMapData));
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    component.assign({mapId: 'mapId', wingId: 'wingId', fromList: true});
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(component.assignMapState).toEqual(assignMapData);
    });
    flush();
    expect(mockAsignMapService.assign).toHaveBeenCalledWith('mapId', 'wingId', true);
  }));

  it('should catch error in assign data', fakeAsync(() => {
    spyOn(console, 'error');
    mockAsignMapService.assign.and.returnValue(throwError(''));
    mockAsignMapService.load.and.returnValue(of(assignMapData));
    fixture.detectChanges();
    component.assign({mapId: 'mapId', wingId: 'wingId', fromList: true});
    component.assignMap$.subscribe((assignMap: AssignMap) => {
      expect(assignMap).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    });
    flush();
  }));

});

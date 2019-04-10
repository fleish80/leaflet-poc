import {async, ComponentFixture, TestBed} from '@angular/core/testing';

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

fdescribe('AssignMapComponent', () => {
  let component: AssignMapComponent;
  let fixture: ComponentFixture<AssignMapComponent>;
  let windowMock: Window;

  beforeEach(async(() => {
    windowMock = {
      parent: jasmine.createSpyObj([
        'frommap_getEditedCampus',
        'frommap_getSelectedBuilding',
        'frommap_getSelectedFloor'
      ])
    } as any;
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
        HttpClientModule],
      providers: [{
        provide: 'window', useFactory: (() => {
          return windowMock;
        })
      }]
  })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

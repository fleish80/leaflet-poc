import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BuildingListComponent} from './building-list.component';
import {OrderModule} from 'ngx-order-pipe';
import {ScrollModule} from '../../scroll/scroll.module';
import {MapItemComponent} from '../map-item/map-item.component';
import {TranslateModule} from '../../translate/translate.module';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayPanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';

describe('BuildingListComponent', () => {
  let component: BuildingListComponent;
  let fixture: ComponentFixture<BuildingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingListComponent, MapItemComponent ],
      imports: [OrderModule, ScrollModule, TranslateModule, DragDropModule, OverlayPanelModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should drag', () => {
    spyOn(component.assign, 'emit');
    const event = {
      previousContainer: {
        id: 'mapId',
        connectedTo: ['id1', 'id2']
      }
    } as CdkDragDrop<any>;
    component.drop(event, 'wingId');
    expect(component.assign.emit).toHaveBeenCalledWith({ mapId: 'mapId', wingId: 'wingId', fromList: true });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapItemComponent } from './map-item.component';
import {OrderModule} from 'ngx-order-pipe';
import {ScrollModule} from '../../scroll/scroll.module';
import {TranslateModule} from '../../translate/translate.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayPanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';

describe('MapItemComponent', () => {
  let component: MapItemComponent;
  let fixture: ComponentFixture<MapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapItemComponent ],
      imports: [OrderModule, ScrollModule, TranslateModule, DragDropModule, OverlayPanelModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the popover', () => {
    component.popupOpen = false;
    component.onShow();
    expect(component.popupOpen).toEqual(true);
  });

  it('should hide the popover', () => {
    component.popupOpen = true;
    component.onHide();
    expect(component.popupOpen).toEqual(false);
  });
});

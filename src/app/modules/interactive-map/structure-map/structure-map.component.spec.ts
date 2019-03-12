import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureMapComponent } from './structure-map.component';

describe('StructureMapComponent', () => {
  let component: StructureMapComponent;
  let fixture: ComponentFixture<StructureMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

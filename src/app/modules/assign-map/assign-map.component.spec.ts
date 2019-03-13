import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMapComponent } from './assign-map.component';

describe('AssignMapComponent', () => {
  let component: AssignMapComponent;
  let fixture: ComponentFixture<AssignMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignMapComponent ]
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

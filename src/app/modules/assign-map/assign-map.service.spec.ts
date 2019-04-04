import {inject, TestBed} from '@angular/core/testing';

import {AssignMapService, assignMapUrl} from './assign-map.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AssignMapService', () => {


  let windowMock: Window;

  beforeEach(() => {
    windowMock = {parent: jasmine.createSpyObj(['frommap_getEditedCampus', 'frommap_getSelectedBuilding'])} as any;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'window', useFactory: (() => {
            return windowMock;
          })
        }
      ]
    });
  });

  it('should be created', () => {
    const service: AssignMapService = TestBed.get(AssignMapService);
    expect(service).toBeTruthy();
  });

  it('should call load campus data with correct url', inject([AssignMapService, HttpTestingController],
    (service: AssignMapService, controller: HttpTestingController) => {
      const parent = windowMock.parent as any;
      parent.frommap_getEditedCampus.and.returnValue(1);
      parent.frommap_getSelectedBuilding.and.returnValue(5);
      service.loadCampusData().subscribe();
      const req = controller.expectOne(`${assignMapUrl}/load-campus-data/1/5`);
      req.flush({ building: {items: []}, availableMaps: [] });
      controller.verify();
    }));

  it('should call remove map with correct url', inject([AssignMapService, HttpTestingController],
    (service: AssignMapService, controller: HttpTestingController) => {
      service.removeMap('mapId').subscribe();
      const req = controller.expectOne(`${assignMapUrl}/remove-map/mapId`);
      req.flush({ building: {items: []}, availableMaps: [] });
      controller.verify();
    }));

});

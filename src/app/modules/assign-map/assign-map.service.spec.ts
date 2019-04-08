import {inject, TestBed} from '@angular/core/testing';

import {AssignMapService, assignMapUrl} from './assign-map.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AssignMap} from './assign-map.model';

describe('AssignMapService', () => {

  let windowMock: Window;

  beforeEach(() => {
    windowMock = {
      parent: jasmine.createSpyObj([
        'frommap_getEditedCampus',
        'frommap_getSelectedBuilding',
        'frommap_getSelectedFloor'
      ])
    } as any;
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

  describe('load campus', () => {
    let parent: any;

    beforeEach(() => {
      parent = windowMock.parent as any;
      parent.frommap_getEditedCampus.and.returnValue(1);
      parent.frommap_getSelectedBuilding.and.returnValue(5);
      parent.frommap_getSelectedFloor.and.returnValue(3);
    });

    it('should call data with correct url', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.load().subscribe();
        const req = controller.expectOne(`${assignMapUrl}/load-campus-data/1/5`);
        req.flush({building: {items: []}, availableMaps: []});
        controller.verify();
      }));

    it('should return an Observable of AssignMap', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.load().subscribe(value => {
          expect(value).toBeDefined();
          expect(value instanceof AssignMap).toBeTruthy();
        });
      }));
  });

  describe('remove map', () => {

    it('should call with correct url', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.remove('mapId').subscribe();
        const req = controller.expectOne(`${assignMapUrl}/remove-map/mapId`);
        req.flush({building: {items: []}, availableMaps: []});
        controller.verify();
      }));

    it('should return an Observable of AssignMap', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.remove('mapId').subscribe(value => {
          expect(value).toBeDefined();
          expect(value instanceof AssignMap).toBeTruthy();
        });
      }));
  });

  describe('assign map', () => {

    it('should call with correct url', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.assign('mapId', 'wingId', true).subscribe();
        const req = controller.expectOne(`${assignMapUrl}/assign-map/mapId/wingId/1`);
        req.flush({building: {items: []}, availableMaps: []});
        controller.verify();
      }));

    it('should return an Observable of AssignMap', inject([AssignMapService, HttpTestingController],
      (service: AssignMapService, controller: HttpTestingController) => {
        service.assign('mapId', 'wingId', true).subscribe(value => {
          expect(value).toBeDefined();
          expect(value instanceof AssignMap).toBeTruthy();
        });
      }));
  });
});

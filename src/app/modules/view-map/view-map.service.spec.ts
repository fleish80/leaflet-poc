import { TestBed } from '@angular/core/testing';

import { ViewMapService } from './view-map.service';

describe('ViewMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewMapService = TestBed.get(ViewMapService);
    expect(service).toBeTruthy();
  });
});

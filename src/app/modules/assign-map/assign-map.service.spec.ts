import { TestBed } from '@angular/core/testing';

import { AssignMapService } from './assign-map.service';

describe('AssignMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignMapService = TestBed.get(AssignMapService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CacheRegistrationService} from '../../core/services/cache-registration/cache-registration.service';

fdescribe('TranslateInterceptor', () => {

  let mockCacheRegistrationService;

  beforeEach(() => {
    mockCacheRegistrationService = jasmine.createSpyObj(['addToCache']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: CacheRegistrationService, useValue: mockCacheRegistrationService}
      ]
    });
  });

  fit('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });
});

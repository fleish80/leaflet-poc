import {inject, TestBed} from '@angular/core/testing';
import {CacheRegistrationService} from './cache-registration.service';

fdescribe('CacheRegistrationService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: CacheRegistrationService = TestBed.get(CacheRegistrationService);
    expect(service).toBeTruthy();
  });

  it('should add to cache', inject([CacheRegistrationService], (service: CacheRegistrationService) => {
    service.addToCache('/data');
    expect(service.addedToCache('/data')).toBeTruthy();
  }));

  it('should not add to cache',  inject([CacheRegistrationService], (service: CacheRegistrationService) => {
    service.addedToCache('/data');
    expect(service.addedToCache('/another-data')).toBeFalsy();
  }));
});

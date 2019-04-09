import {inject, TestBed} from '@angular/core/testing';

import {CacheInterceptor} from './cache.interceptor';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient, HttpHeaders} from '@angular/common/http';
import {CacheRegistrationService} from '../../services/cache-registration/cache-registration.service';

fdescribe('CacheInterceptor', () => {

  let mockCacheRegistrationService;

  beforeEach(() => {
    mockCacheRegistrationService = jasmine.createSpyObj(['addedToCache']);
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          {
            provide: CacheRegistrationService,
            useValue: mockCacheRegistrationService
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true
          }]
      }
    );
  });

  it('should be created', () => {
    const service: CacheInterceptor = TestBed.get(CacheInterceptor);
    expect(service).toBeTruthy();
  });

  it('expects a single request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    mockCacheRegistrationService.addedToCache.and.returnValue(true);
    const url = '/data';
    http.get(url).subscribe();
    http.get(url).subscribe();
    http.get(url).subscribe();
    http.get(url).subscribe();
    http.get(url).subscribe();
    http.get(url).subscribe();
    http.get(url).subscribe();
    httpMock.expectOne(url);
    httpMock.verify();
  }));

  it('expects none request after a real request',
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      mockCacheRegistrationService.addedToCache.and.returnValue(true);
      const url = '/data';
      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectNone(url);

      httpMock.verify();
    }));

  it('expects multiple requests',
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      mockCacheRegistrationService.addedToCache.and.returnValue(false);
      const url = '/data';

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      httpMock.verify();
    }));

  it('expects multiple requests',
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      mockCacheRegistrationService.addedToCache.and.returnValue(false);
      const url = '/data';

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectOne(url);

      httpMock.verify();
    }));

  it('should stop cashing',
    inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      mockCacheRegistrationService.addedToCache.and.returnValue(true);
      const url = '/data';
      let headers = new HttpHeaders();
      headers = headers.set('reset-cache', 'true');

      http.get(url).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectNone(url);

      http.get(url, {headers}).subscribe();
      httpMock.expectOne(url);

      http.get(url).subscribe();
      httpMock.expectNone(url);

      httpMock.verify();
    }));
});

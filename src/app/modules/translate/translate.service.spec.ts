import {inject, TestBed} from '@angular/core/testing';
import {getTranslate, TranslateService, translateUrl} from './translate.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CacheRegistrationService} from '../../core/services/cache-registration/cache-registration.service';

describe('TranslateInterceptor', () => {

  let mockCacheRegistrationService;
  let translateData;

  beforeEach(() => {
    mockCacheRegistrationService = jasmine.createSpyObj(['addToCache']);
    translateData = require('../../../assets/mocks/translate/translate.json');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: CacheRegistrationService, useValue: mockCacheRegistrationService}
      ]
    });
  });

  it('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });

  it('should call data with correct url', inject([TranslateService, HttpTestingController],
    (service: TranslateService, controller: HttpTestingController) => {
      service.getTranslation('key').subscribe();
      controller.expectOne(`${translateUrl}/${getTranslate}`);
      controller.verify();
    }));

  fit('should return a value', inject([TranslateService, HttpTestingController],
    (service: TranslateService, controller: HttpTestingController) => {
      service.getTranslation('map_admin_buttons_copy_zone_tooltip').subscribe(value => {
        expect(value).toBe('Copy Selected Zone');
      });
      const req = controller.expectOne(`${translateUrl}/${getTranslate}`);
      req.flush(translateData);
      controller.verify();
    }));

  it('should return a key', inject([TranslateService, HttpTestingController],
    (service: TranslateService, controller: HttpTestingController) => {
      service.getTranslation('key_not_defined').subscribe(value => {
        expect(value).toBe('key_not_defined');
      });
      const req = controller.expectOne(`${translateUrl}/${getTranslate}`);
      req.flush(translateData);
      controller.verify();
    }));
});

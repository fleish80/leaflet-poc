import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {share, tap} from 'rxjs/operators';
import {CacheRegistrationService} from '../../services/cache-registration/cache-registration.service';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  private cachedData = new Map<string, any>();

  constructor(private cacheRegistrationService: CacheRegistrationService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.method !== 'GET' ||
      !this.cacheRegistrationService.addedToCache(httpRequest.url)) {
      return next.handle(httpRequest);
    }

    if (httpRequest.headers.get('reset-cache')) {
      this.cachedData.delete(httpRequest.urlWithParams);
    }

    const lastResponse = this.cachedData.get(httpRequest.urlWithParams);
    if (lastResponse) {
      return (lastResponse instanceof Observable)
        ? lastResponse : of(lastResponse.clone());
    }

    const requestHandle = next.handle(httpRequest).pipe(tap((stateEvent) => {
        if (stateEvent instanceof HttpResponse) {
          this.cachedData.set(
            httpRequest.urlWithParams,
            stateEvent.clone()
          );
        }
      }),
      share());

    this.cachedData.set(httpRequest.urlWithParams, requestHandle);

    return requestHandle;
  }
}

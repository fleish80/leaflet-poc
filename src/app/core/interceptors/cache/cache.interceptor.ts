import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  private cachedData = new Map<string, any>();

  constructor() {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (httpRequest.method !== 'GET') {
      return next.handle(httpRequest);
    }

    // Also leave scope of resetting already cached data for a URI
    if (httpRequest.headers.get('reset-cache')) {
      this.cachedData.delete(httpRequest.urlWithParams);
    }

    const lastResponse = this.cachedData.get(httpRequest.urlWithParams);
    if (lastResponse) {
      // In case of parallel requests to same URI,
      // return the request already in progress
      // otherwise return the last cached data
      return (lastResponse instanceof Observable)
        ? lastResponse : of(lastResponse.clone());
    }

    /// If the request of going through for first time
    // then let the request proceed and cache the response
    const requestHandle = next.handle(httpRequest).pipe(tap((stateEvent) => {
      if (stateEvent instanceof HttpResponse) {
        this.cachedData.set(
          httpRequest.urlWithParams,
          stateEvent.clone()
        );
      }
    }));

    // Meanwhile cache the request Observable to handle parallel request
    this.cachedData.set(httpRequest.urlWithParams, requestHandle);

    return requestHandle;
  }
}

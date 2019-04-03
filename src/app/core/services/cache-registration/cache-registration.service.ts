import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheRegistrationService {

  constructor() {
  }

  private services = [];

  addedToCache(serviceUri: string) {
    return this.services.indexOf(serviceUri) > -1;
  }

  addToCache(serviceUri: string) {
    if (!this.addedToCache(serviceUri)) {
      this.services.push(serviceUri);
    }
  }
}

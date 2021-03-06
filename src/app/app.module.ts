import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CacheInterceptor} from './core/interceptors/cache/cache.interceptor';
import {AssignMapModule} from './modules/assign-map/assign-map.module';

export function windowFactory() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AssignMapModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'window', useFactory: windowFactory },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';

export function windowFactory() {
  return window;
}

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [
    { provide: 'window', useFactory: windowFactory }
  ]
})
export class SharedModule {
}

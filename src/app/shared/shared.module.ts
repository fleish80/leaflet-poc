import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {TranslatePipe} from '../core/pipes/translate/translate.pipe';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    TranslatePipe
  ],
  declarations: [TranslatePipe]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {TranslatePipe} from '../core/pipes/translate/translate.pipe';
import {SpinnerDirective} from '../core/directives/spinner.directive';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    TranslatePipe,
    SpinnerDirective
  ],
  declarations: [TranslatePipe, SpinnerDirective]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import {TranslatePipe} from '../core/pipes/translate/translate.pipe';
import {SpinnerDirective} from '../core/directives/spinner/spinner.directive';
import { SpinnerModule } from '../modules/spinner/spinner.module';
import { ScrollToElementDirective } from '../core/directives/scroll-to-element/scroll-to-element.directive';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    TranslatePipe,
    SpinnerDirective,
    SpinnerModule,
    ScrollToElementDirective
  ],
  declarations: [TranslatePipe, SpinnerDirective, ScrollToElementDirective]
})
export class SharedModule {
}

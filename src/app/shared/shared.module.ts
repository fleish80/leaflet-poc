import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpinnerModule} from '../modules/spinner/spinner.module';
import {ScrollModule} from '../modules/scroll/scroll.module';
import {TranslateModule} from '../modules/translate/translate.module';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    TranslateModule,
    ScrollModule
  ]
})
export class SharedModule {
}

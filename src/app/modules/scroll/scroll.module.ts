import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollToElementDirective} from './scroll-to-element.directive';

@NgModule({
  declarations: [ScrollToElementDirective],
  exports: [ScrollToElementDirective]
})
export class ScrollModule {
}

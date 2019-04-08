import {NgModule} from '@angular/core';
import {TranslatePipe} from './translate.pipe';

@NgModule({
  declarations: [TranslatePipe],
  providers: [TranslatePipe],
  exports: [TranslatePipe]
})
export class TranslateModule { }

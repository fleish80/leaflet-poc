import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [],
  exports: [DragDropModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule]
})
export class MaterialModule {
}

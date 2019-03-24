import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [],
  imports: [],
  exports: [DragDropModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTreeModule]
})
export class MaterialModule {
}

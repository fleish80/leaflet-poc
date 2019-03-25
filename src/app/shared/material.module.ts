import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatTooltipModule
} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    DragDropModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
}

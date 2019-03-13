import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignMapRoutingModule } from './assign-map-routing.module';
import { AssignMapComponent } from './assign-map.component';

@NgModule({
  declarations: [AssignMapComponent],
  imports: [
    CommonModule,
    AssignMapRoutingModule
  ]
})
export class AssignMapModule { }

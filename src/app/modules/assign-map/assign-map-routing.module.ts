import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssignMapComponent} from './assign-map.component';

const routes: Routes = [
  {
    path: '',
    component: AssignMapComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignMapRoutingModule { }



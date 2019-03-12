import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractiveMapComponent} from './interactive-map.component';

const routes: Routes = [
  {
    path: '',
    component: InteractiveMapComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InteractiveMapRoutingModule { }

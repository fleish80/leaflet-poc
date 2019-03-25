import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assign-map',
    pathMatch: 'full'
  },
  {
    path: 'interactive-map',
    loadChildren: './modules/interactive-map/interactive-map.module#InteractiveMapModule',
  },
  {
    path: 'view-map',
    loadChildren: './modules/view-map/view-map.module#ViewMapModule',
  },
  {
    path: 'assign-map',
    loadChildren: './modules/assign-map/assign-map.module#AssignMapModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

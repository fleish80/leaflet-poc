import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-map',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

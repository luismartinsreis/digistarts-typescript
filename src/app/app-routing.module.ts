import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';


const appRoutes: Routes = [
  {
    path: 'p1',
    component: P1Component,
  },
  {
    path: 'p2',
    component: P2Component,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent= [P1Component,P2Component];
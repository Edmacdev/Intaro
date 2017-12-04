import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { DrawingComponent } from './drawing/drawing.component';

const routes: Routes = [

{
  path: 'drawing',
  component: DrawingComponent
},
{
  path: '',
  component: HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

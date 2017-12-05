import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadingComponent } from './reading/reading.component'

const routes: Routes = [


{
  path: 'reading',
  component: ReadingComponent
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

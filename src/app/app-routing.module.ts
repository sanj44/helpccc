import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColabrateComponent } from './colabrate/colabrate.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Connect",component:ConnectComponent},
  {path:"Colobrate",component:ColabrateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

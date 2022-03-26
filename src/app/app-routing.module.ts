import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColabrateComponent } from './components/colabrate/colabrate.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CreateInitiativeComponent } from './components/create-initiative/create-initiative.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginAuthGuard } from './gaurd/login-auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[LoginAuthGuard]},
  {path:"Connect",component:ConnectComponent,canActivate:[LoginAuthGuard]},
  {path:"Collaborate",component:ColabrateComponent,canActivate:[LoginAuthGuard]},
  {path:"login",component:LoginComponent},  
  {path:"CreateInitiative",component:CreateInitiativeComponent,canActivate:[LoginAuthGuard]},

  {path:"signup",component:SignupComponent},
  {path:"**",component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

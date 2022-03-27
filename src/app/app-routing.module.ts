import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInitiativeComponent } from './components/create-initiative/create-initiative.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginAuthGuard } from './gaurd/login-auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[LoginAuthGuard]},
  {path:"login",component:LoginComponent},  
  {path:"dashboard",component:DashboardComponent, canActivate:[LoginAuthGuard]},  
  {path:"CreateInitiative",component:CreateInitiativeComponent,canActivate:[LoginAuthGuard]},
  {path:"signup",component:SignupComponent},
  {path:"**",component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

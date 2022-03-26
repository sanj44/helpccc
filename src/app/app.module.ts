import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ColabrateComponent } from './components/colabrate/colabrate.component';
import { ConnectComponent } from './components/connect/connect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleModule } from './shared/mat-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotComponent } from './components/bot/bot.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateInitiativeComponent } from './components/create-initiative/create-initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColabrateComponent,
    ConnectComponent,
    BotComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignupComponent,
    CreateInitiativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

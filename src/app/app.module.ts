import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColabrateComponent } from './colabrate/colabrate.component';
import { ConnectComponent } from './connect/connect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleModule } from './mat-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColabrateComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

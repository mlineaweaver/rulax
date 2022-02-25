import { InformationComponent } from './lax-app/components/information/information.component';
import { AppRoutingModule } from './../../app-routing.module';
import { LaxAppComponent } from './lax-app/lax-app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StaffComponent } from './lax-app/components/staff/staff.component';
import { PlayerComponent } from './lax-app/components/player/player.component';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LaxAppComponent,
    InformationComponent,
    StaffComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

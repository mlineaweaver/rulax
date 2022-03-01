import { InformationComponent } from './home/components/information/information.component';
import { AppRoutingModule } from './../../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StaffComponent } from './home/components/staff/staff.component';
import { PlayerComponent } from './home/components/player/player.component';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerFormComponent } from './registration/components/player-form/player-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    InformationComponent,
    StaffComponent,
    PlayerComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

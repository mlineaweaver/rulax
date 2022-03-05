import { CamperChargeComponent } from './registration/components/camper-charge/camper-charge.component';
import { InformationComponent } from './home/components/information/information.component';
import { AppRoutingModule } from './../../app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StaffComponent } from './home/components/staff/staff.component';
import { PlayerComponent } from './home/components/player/player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegistrationComponent,
    InformationComponent,
    StaffComponent,
    PlayerComponent,
    CamperChargeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

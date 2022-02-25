import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";

// app-routing.module.ts
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
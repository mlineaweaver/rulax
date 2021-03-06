import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { CheckoutComponent } from "src/app/checkout/checkout.component";
import { HomeComponent } from "src/app/home/home.component";
import { RegistrationComponent } from "src/app/registration/registration.component";

// app-routing.module.ts
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'register',
      component: RegistrationComponent,
    },
    // {
    //   path: 'checkout',
    //   component: CheckoutComponent,
    // },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
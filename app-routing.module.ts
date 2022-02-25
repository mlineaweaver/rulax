import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { LaxAppComponent } from "src/app/lax-app/lax-app.component";

// app-routing.module.ts
const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'pizzas',
      component: LaxAppComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
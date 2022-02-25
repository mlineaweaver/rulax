import { Component } from "@angular/core";


@Component({
    selector: 'app-lax-app',
    templateUrl: './lax-app.component.html',
    styleUrls: ['./lax-app.component.scss'],
  })
  export class LaxAppComponent {
      prices = {
          dayCamper: { cost: 450.00 },
          overnightCamper: { cost: 700.00 }
      }
  }
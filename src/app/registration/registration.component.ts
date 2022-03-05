import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormArray } from "@angular/forms";



@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
    
  })
  export class RegistrationComponent {}
   export class Player {

        constructor(
         private id: number,
          private name: string,
          private gradYear: string,
          private alterEgo?: string
        ) {  }
      
      }

  
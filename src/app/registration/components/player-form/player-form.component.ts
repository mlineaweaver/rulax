import { Component } from "@angular/core";
import { Player } from "../../registration.component";

@Component({
    selector: 'app-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.scss']
  })
  export class PlayerFormComponent {
  
    gradYears = ['2022', '2023',
              '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
  
    players = new Player(18, 'Dr IQ', this.gradYears[0], 'Chuck Overstreet');
  
    submitted = false;
  
    onSubmit() { this.submitted = true; }
  
  }
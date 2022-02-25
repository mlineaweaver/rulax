import { Component, Input } from "@angular/core";
import { Staff } from "api/lib/api-interfaces";
import { TeamService } from "src/app/shared/services/team.service";

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
})

export class StaffComponent {
    readonly staff$ = this.teamService.getStaff();

    constructor(private teamService: TeamService) {}
}
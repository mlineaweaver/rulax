import { Component, Input } from "@angular/core";
import { Staff } from "api/lib/api-interfaces";
import { TeamService } from "src/app/shared/services/team.service";

@Component({
    selector: 'app-players',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})

export class PlayerComponent {
    readonly player$ = this.teamService.getPlayers();

    constructor(private teamService: TeamService) {}
}
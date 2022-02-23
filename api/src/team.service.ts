import { PLAYERS_LIST, STAFF_LIST } from './../lib/team';
import { Players, Staff } from "../lib/api-interfaces";

export class TeamService {
    private readonly Players: Players[] = PLAYERS_LIST;
    private readonly Staff: Staff[] = STAFF_LIST;

    getPlayersList(): Players[]{
        return this.Players;
    }
    getStaffList(): Staff[]{
        return this.Staff;
    }
    
}
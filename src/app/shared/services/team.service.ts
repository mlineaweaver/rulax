import { Players, Staff } from './../../../../api/lib/api-interfaces';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';


// lax.service.ts
interface StaffResponse {
    msg: string;
    staff: Staff[];
  }
interface PlayerResponse {
    msg: string;
    players: Players[];
}  
  @Injectable({
    providedIn: 'root',
  })
  export class TeamService {
    constructor(private http: HttpClient) {}
  
    getStaff(): Observable<Staff[]> {
      return this.http
        .get<StaffResponse>('http://localhost:4000/api/team/staff')
        .pipe(map((data) => data.staff));
    }

    getPlayers(): Observable<Players[]> {
      return this.http
        .get<PlayerResponse>('http://localhost:4000/api/team/players')
        .pipe(map((data) => data.players));
    }
  }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  getCurrentTournament(): Observable<string> {
    return of('tournament');
    // return this.http.get<string>('doStuff');
  }

  constructor(private http: HttpClient) { }
}

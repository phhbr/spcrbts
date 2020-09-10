import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/shared/services/tournament.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  tournamentName$: Observable<string>;
  constructor(private tournamentService: TournamentService) { 
    this.tournamentName$ = this.tournamentService.getCurrentTournament();
  }

  ngOnInit(): void {
  }

}

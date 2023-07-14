import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OnlineStatusDirective } from '../../directives/online-status.directive';
import { Player } from '../../interfaces/player';
import { SortByScoreModule } from '../../pipes/sort-by-score/sort-by-score.module';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css'],
  standalone: true,
  imports: [CommonModule, OnlineStatusDirective, RouterLinkWithHref, SortByScoreModule],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighScoresComponent implements OnInit {
  public players$: Observable<Player[] | undefined> = of(undefined);

  constructor(
    private api: ApiService
  ) { }

  public ngOnInit(): void {
    this.players$ = this.api.getAllPlayers$();
  }
}

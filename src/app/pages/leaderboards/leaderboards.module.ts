import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HighScoresComponent } from '../../components/high-scores/high-scores.component';
import { MostGemsComponent } from '../../components/most-gems/most-gems.component';
import { OnlineStatusDirective } from '../../directives/online-status.directive';
import { SortByGemCountPipe } from '../../pipes/sort-by-gem-count/sort-by-gem-count.pipe';
import { LeaderboardsRoutingModule } from './leaderboards-routing.module';
import { LeaderboardsComponent } from './leaderboards.component';

@NgModule({
  declarations: [
    LeaderboardsComponent,
    MostGemsComponent
  ],
  imports: [
    CommonModule,
    HighScoresComponent,
    LeaderboardsRoutingModule,
    OnlineStatusDirective,
    SortByGemCountPipe,
  ]
})
export class LeaderboardsModule { }

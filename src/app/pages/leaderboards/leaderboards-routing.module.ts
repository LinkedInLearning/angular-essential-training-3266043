import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardsComponent } from './leaderboards.component';

const routes: Routes = [{ path: '', component: LeaderboardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardsRoutingModule { }

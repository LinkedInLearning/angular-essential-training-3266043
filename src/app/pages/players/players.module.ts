import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnlineStatusDirective } from '../../directives/online-status.directive';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    OnlineStatusDirective,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }

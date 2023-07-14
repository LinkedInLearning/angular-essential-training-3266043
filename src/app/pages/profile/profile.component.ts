import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { OnlineStatusDirective } from '../../directives/online-status.directive';
import { Player } from '../../interfaces/player';
import { JoinPipe } from '../../pipes/join/join.pipe';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, JoinPipe, OnlineStatusDirective]
})
export class ProfileComponent implements OnInit {
  public player$: Observable<Player | undefined> = of(undefined);

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.player$ = this.route.paramMap.pipe(
      map(params => params.get('id') ?? ''),
      switchMap(id => this.api.getPlayerById$(id))
    );
  }

}

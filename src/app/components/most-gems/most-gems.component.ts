import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../../interfaces/player';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-most-gems',
  templateUrl: './most-gems.component.html',
  styleUrls: ['./most-gems.component.css']
})
export class MostGemsComponent implements OnInit {
  public players$: Observable<Player[] | undefined> = of(undefined);

  constructor(
    private api: ApiService
  ) { }

  public ngOnInit(): void {
    this.players$ = this.api.getAllPlayers$();
  }
}

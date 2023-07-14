import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HighScoresComponent } from 'src/app/components/high-scores/high-scores.component';
import { MostGemsComponent } from 'src/app/components/most-gems/most-gems.component';
import { ApiService } from 'src/app/services/api.service';
import { LeaderboardsComponent } from './leaderboards.component';

describe('LeaderboardsComponent', () => {
  let component: LeaderboardsComponent;
  let fixture: ComponentFixture<LeaderboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaderboardsComponent, MostGemsComponent],
      imports: [HighScoresComponent, HttpClientTestingModule],
      providers: [ApiService, HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeaderboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

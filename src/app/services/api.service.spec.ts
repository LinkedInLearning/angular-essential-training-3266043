import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Player } from '../interfaces/player';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpClient: HttpClient;
  let service: ApiService;

  const EXPECTED_PLAYERS_LIST: Player[] = [{
    gems: ['Diamond'],
    id: 'abc123',
    name: 'Abc Xyz',
    online: true,
    score: 0.12345
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [ApiService, HttpClient]
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ApiService);

    spyOn(httpClient, 'get').and.returnValue(of(EXPECTED_PLAYERS_LIST));
  });

  describe('getAllPlayers$()', () => {
    it('should get all players', (done: DoneFn) => {
      service.getAllPlayers$().subscribe(actual => {
        expect(actual).toEqual(EXPECTED_PLAYERS_LIST);
        done();
      });
    });
  });

  describe('getPlayerById$()', () => {
    it('should get a player by ID', (done: DoneFn) => {
      service.getPlayerById$('abc123').subscribe(actual => {
        expect(actual).toEqual(EXPECTED_PLAYERS_LIST.at(0));
        done();
      });
    });

    it('should return undefined if no player is found', (done: DoneFn) => {
      service.getPlayerById$('does-not-exist').subscribe(actual => {
        expect(actual).toEqual(undefined);
        done();
      });
    });
  });

  describe('getPlayersByName$()', () => {
    it('should get players by Name', (done: DoneFn) => {
      service.getPlayersByName$('abc').subscribe(actual => {
        expect(actual).toEqual(EXPECTED_PLAYERS_LIST);
        done();
      });
    });

    it('should return an empty array if no players are found', (done: DoneFn) => {
      service.getPlayersByName$('does-not-exist').subscribe(actual => {
        expect(actual).toEqual([]);
        done();
      });
    });
  });
});

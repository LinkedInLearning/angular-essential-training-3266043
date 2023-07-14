import { Player } from 'src/app/interfaces/player';
import { SortByScorePipe } from './sort-by-score.pipe';

describe('SortByScorePipe', () => {
  let pipe: SortByScorePipe;

  beforeEach(() => {
    pipe = new SortByScorePipe();
  });

  it('should sort players by highest score', () => {
    const expected = [
      { score: 0.3 },
      { score: 0.2 },
      { score: 0.1 },
      { score: 0 },
    ] as Player[];

    const actual = pipe.transform([
      { score: 0.1 },
      { score: 0 },
      { score: 0.2 },
      { score: 0.3 },
    ] as Player[]);

    expect(actual).toEqual(expected);
  });
});

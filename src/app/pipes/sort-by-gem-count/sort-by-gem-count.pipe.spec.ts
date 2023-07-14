import { Player } from 'src/app/interfaces/player';
import { SortByGemCountPipe } from './sort-by-gem-count.pipe';

describe('SortByGemCountPipe', () => {
  let pipe: SortByGemCountPipe;

  beforeEach(() => {
    pipe = new SortByGemCountPipe();
  });

  it('should sort players by gem count', () => {
    const expected = [
      { gems: ['Diamond', 'Emerald', 'Quartz'] },
      { gems: ['Diamond', 'Emerald'] },
      { gems: ['Diamond'] },
      { gems: [] },
    ] as Player[];

    const actual = pipe.transform([
      { gems: ['Diamond'] },
      { gems: [] },
      { gems: ['Diamond', 'Emerald'] },
      { gems: ['Diamond', 'Emerald', 'Quartz'] },
    ] as Player[]);

    expect(actual).toEqual(expected);
  });
});

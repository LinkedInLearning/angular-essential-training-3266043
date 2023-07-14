import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('should join an array using the default separator', () => {
    const expected = '1, 2, 3';
    const actual = pipe.transform([1, 2, 3]);

    expect(actual).toBe(expected);
  });

  it('should join an array using a custom separator', () => {
    const expected = '1 | 2 | 3';
    const actual = pipe.transform([1, 2, 3], ' | ');

    expect(actual).toBe(expected);
  });
});

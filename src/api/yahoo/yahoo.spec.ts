import { Yahoo } from './yahoo';
import { fetch } from '../../services/fetch/fetch';

describe('Yahoo API', () => {
  it('should return ticker data', async () => {
    const data = await new Yahoo(fetch).getTicker('AAPL', {
      period1: +new Date(`2000-01-01`) / 1000,
      period2: +new Date(`2022-01-01`) / 1000,
      includeAdjustedClose: 'true',
      interval: '1d',
    });

    expect(typeof data).toBe('string');
  });
});

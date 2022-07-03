import { Stooq } from './stooq';
import { fetch } from '../../services/fetch/fetch';

describe('Stooq API', () => {
  it('should return ticker data', async () => {
    const data = await new Stooq(fetch).getTicker('eth.v', {
      period1: 20000101,
      period2: 20220101,
      interval: 'd',
    });

    expect(typeof data).toBe('string');
  });
});

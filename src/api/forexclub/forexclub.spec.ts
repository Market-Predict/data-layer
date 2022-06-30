import { fetch } from '../../services/fetch/fetch';
import { ForexClub } from './forexclub';
import { regions } from './forexclub.constansts';

describe('ForexClub API', () => {
  const client = new ForexClub(fetch);

  it('should get regions', () => {
    const data = client.getRegions();
    expect(data.join('')).toEqual(regions.join(''));
  });

  it('should return calendar data', async () => {
    const data = await client.getCalendar({
      start: '2022-06-01',
      end: '2022-07-01',
      lang: 'en',
      region: 'US',
      importance: 'high',
    });
    expect(Array.isArray(data)).toBe(true);
  });
});

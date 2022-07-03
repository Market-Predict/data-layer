import { StooqInterface, TickerGroups, TickerOptions } from './stooq.interface';
import { indices } from './const /indices';
import { cryptocurrencies } from './const /cryptocurrencies';
import { commodities } from './const /commodities';
import { currencies } from './const /curriencies';
import { FetchInterface } from '../../services/fetch/fetch.interface';

export class Stooq implements StooqInterface {
  constructor(private readonly fetcher: FetchInterface) {}

  getTickerList(type?: TickerGroups) {
    const mappedType = {
      commodities,
      cryptocurrencies,
      indices,
      currencies,
    };
    return type ? mappedType[type] : mappedType;
  }

  async getTicker(
    ticker: string,
    { period1, period2, interval, includeAdjustedClose }: TickerOptions
  ) {
    const url = new URL(`https://stooq.com/q/d/l/?s=${ticker}`);

    url.searchParams.set('d1', String(period1));
    url.searchParams.set('d2', String(period2));
    url.searchParams.set('i', String(interval));
    url.searchParams.set('o', `${includeAdjustedClose ? '1' : '0'}000000`);

    const { data } = await this.fetcher<string>({
      url: url.toString(),
      method: 'GET',
    });

    return data;
  }
}

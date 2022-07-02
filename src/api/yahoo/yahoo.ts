import { TickerOptions, YahooInterface, TickerGroups } from './yahoo.interface';
import { FetchInterface } from '../../services/fetch/fetch.interface';
import { commodities } from './const/commodities';
import { cryptocurrencies } from './const/cryptocurrencies';
import { indices } from './const/indices';
import { currencies } from './const/currencies';

export class Yahoo implements YahooInterface {
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

  async getTicker(ticker: string, options: TickerOptions) {
    const url = new URL(
      `https://query1.finance.yahoo.com/v7/finance/download/${ticker}`
    );
    Object.entries(options).forEach(([key, value]) =>
      url.searchParams.set(key, String(value))
    );

    const { data } = await this.fetcher<string>({
      url: url.toString(),
      method: 'GET',
    });

    return data;
  }
}

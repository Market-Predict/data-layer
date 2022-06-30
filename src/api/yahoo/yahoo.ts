import { TickerOptions, YahooInterface } from './yahoo.interface';
import { FetchInterface } from '../../services/fetch/fetch.interface';

export class Yahoo implements YahooInterface {
  constructor(private readonly fetcher: FetchInterface) {}

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

import { GetTickerOptions, YahooInterface } from './yahoo.interface';
import { FetchInterface } from '../../services/fetch/fetch.interface';

export class Yahoo implements YahooInterface {
  constructor(private readonly fetcher: FetchInterface) {}

  async getTicker(
    ticker: string,
    {
      period1,
      period2,
      interval,
      includeAdjustedClose = 'true',
    }: GetTickerOptions
  ) {
    const url = new URL(
      `https://query1.finance.yahoo.com/v7/finance/download/${ticker}`
    );
    url.searchParams.set('period1', String(period1));
    url.searchParams.set('period2', String(period2));
    url.searchParams.set('interval', interval);
    url.searchParams.set('includeAdjustedClose', includeAdjustedClose);

    const { data } = await this.fetcher<string>({
      url: url.toString(),
      method: 'GET',
    });

    return data;
  }
}

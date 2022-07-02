export interface YahooInterface {
  getTicker(ticker: string, options: TickerOptions): Promise<string>;
  getTickerList(
    type?: TickerGroups
  ): Record<string, string> | Record<string, string>[];
}

export type TickerGroups =
  | 'commodities'
  | 'cryptocurrencies'
  | 'indices'
  | 'currencies';

export interface TickerOptions {
  period1: number;
  period2: number;
  interval: '1d';
  includeAdjustedClose?: boolean;
}

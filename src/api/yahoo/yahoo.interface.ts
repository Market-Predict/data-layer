export interface YahooInterface {
  getTicker(ticker: string, options: TickerOptions): Promise<string>;
}

export interface TickerOptions {
  period1: number;
  period2: number;
  interval: '1d';
  includeAdjustedClose?: boolean;
}

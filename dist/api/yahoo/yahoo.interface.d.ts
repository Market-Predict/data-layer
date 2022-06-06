export interface YahooInterface {
    getTicker(ticker: string, options: GetTickerOptions): Promise<string>;
}
declare type TickerInterval = '1d';
export interface GetTickerOptions {
    period1: number;
    period2: number;
    interval: TickerInterval;
    includeAdjustedClose: 'true' | 'false';
}
export {};
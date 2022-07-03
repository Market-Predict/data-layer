export interface YahooInterface {
    getTicker(ticker: string, options: TickerOptions): Promise<string>;
    getTickerList(type?: TickerGroups): any;
}
export declare type TickerGroups = 'commodities' | 'cryptocurrencies' | 'indices' | 'currencies';
export interface TickerOptions {
    period1: number;
    period2: number;
    interval: '1d';
    includeAdjustedClose?: boolean;
}

import { GetTickerOptions, YahooInterface } from './yahoo.interface';
import { FetchInterface } from '../../services/fetch/fetch.interface';
export declare class Yahoo implements YahooInterface {
    private readonly fetcher;
    constructor(fetcher: FetchInterface);
    getTicker(ticker: string, { period1, period2, interval, includeAdjustedClose, }: GetTickerOptions): Promise<string>;
}

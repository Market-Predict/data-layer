import { TickerOptions, YahooInterface } from './yahoo.interface';
import { FetchInterface } from '../../services/fetch/fetch.interface';
export declare class Yahoo implements YahooInterface {
    private readonly fetcher;
    constructor(fetcher: FetchInterface);
    getTicker(ticker: string, options: TickerOptions): Promise<string>;
}

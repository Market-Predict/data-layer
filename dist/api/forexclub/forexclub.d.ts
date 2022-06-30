import { FetchInterface } from '../../services/fetch/fetch.interface';
import { CalendarOptions, CalendarResponse, ForexClubInterface } from './forexclub.interface';
export declare class ForexClub implements ForexClubInterface {
    private readonly fetcher;
    constructor(fetcher: FetchInterface);
    getRegions(): string[];
    getCalendar(options: CalendarOptions): Promise<CalendarResponse>;
}

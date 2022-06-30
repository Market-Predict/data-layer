import { FetchInterface } from '../../services/fetch/fetch.interface';
import {
  CalendarOptions,
  CalendarResponse,
  ForexClubInterface,
} from './forexclub.interface';
import { regions } from './forexclub.constansts';

export class ForexClub implements ForexClubInterface {
  constructor(private readonly fetcher: FetchInterface) {}

  getRegions(): string[] {
    return regions;
  }

  async getCalendar(options: CalendarOptions): Promise<CalendarResponse> {
    const url = new URL('https://economcalendar.fxclub.org/api/events/');
    Object.entries(options).forEach(([key, value]) =>
      url.searchParams.set(key, value)
    );

    const { data } = await this.fetcher<CalendarResponse>({
      url: url.toString(),
      method: 'GET',
    });

    return data;
  }
}

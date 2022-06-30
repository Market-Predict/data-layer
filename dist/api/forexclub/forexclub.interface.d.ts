export interface ForexClubInterface {
    getCalendar(options: CalendarOptions): Promise<CalendarResponse>;
}
declare type ImportanceType = 'high' | 'medium' | 'low' | '';
export interface CalendarOptions {
    start: string;
    end: string;
    lang?: 'ru' | 'en' | 'de';
    region?: string;
    timezone?: string;
    importance?: Omit<ImportanceType, ''>;
    format?: 'json' | 'api';
}
export interface CalendarResponse {
    id: number;
    title: string;
    description: string;
    type: string;
    region: string;
    impact: Impact | null;
    impacts: Impacts[];
    actual: string | null;
    previous: string | null;
    forecast: string | null;
    importance: ImportanceType;
    timestamp: Date;
    unit: string;
    currency: string;
    volatilities: string[];
}
export interface Impact {
    symbol: string;
    name: string;
    deeplink: string;
    value: string;
}
export interface Impacts {
    symbol: string;
    name: string;
    deeplink: string;
    value: string;
}
export {};

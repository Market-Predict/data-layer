import { ConverterInterface } from './converter.interface';
export declare class Converter<T extends string> implements ConverterInterface<T> {
    private data;
    constructor(data: string | string[]);
    toCSV(): this;
    toJSON(): this;
    save(): string | string[];
}

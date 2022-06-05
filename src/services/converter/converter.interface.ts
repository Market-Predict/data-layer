export interface ConverterInterface<Keys extends string> {
  toCSV(): this;
  toJSON(): this;
  save(): string | string[] | Record<Keys, string | number>[];
}

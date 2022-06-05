import { ConverterInterface } from './converter.interface';

export class Converter<T extends string> implements ConverterInterface<T> {
  constructor(private data: string | string[]) {}

  toCSV() {
    if (typeof this.data === 'string') {
      this.data = this.data.split('\n');
    }
    return this;
  }

  toJSON() {
    if (Array.isArray(this.data)) {
      const header = this.data[0].split(',');
      const data = this.data.slice(1);
      // @ts-ignore
      this.data = data.reduce((acc, item) => {
        const obj = {};

        if (item.includes('null')) {
          return acc;
        }

        item.split(',').forEach((val, i) => {
          // @ts-ignore
          obj[header[i].replace(' ', '')] = val;
        });

        return [...acc, obj];
      }, <object[]>[]);

      return this;
    }
    return this;
  }

  save() {
    return this.data;
  }
}

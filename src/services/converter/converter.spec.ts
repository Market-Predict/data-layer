import { Converter } from './converter';

const data =
  'Date,Open,High,Low,Close,Adj Close,Volume\n2022-06-03,28.370001,28.760000,27.410000,27.760000,27.760000,189900';

describe('Converter', () => {
  it('should create a array strings', () => {
    const parsedData = new Converter(data).toCSV().save();
    expect(Array.isArray(parsedData)).toBe(true);
  });

  it('should create an array of objects', () => {
    const parsedData = new Converter(data)
      .toCSV()
      .toJSON()
      .save();

    expect(Array.isArray(parsedData)).toBe(true);
    expect(parsedData[0].hasOwnProperty('Open')).toBe(true);
  });
});

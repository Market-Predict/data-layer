import axios, { AxiosPromise } from 'axios';
import { RequestConfig } from './fetch.interface';

const yahoo = axios.create({
  baseURL: 'https://query1.finance.yahoo.com/v7/finance/download/',
});

const apiMapper = {
  yahoo,
};

export const fetch = <T>({
  api = 'yahoo',
  url = '/',
  method = 'GET',
  headers = {},
  params = {},
  data = {},
  ...config
}: RequestConfig): AxiosPromise<T> => {
  return apiMapper[api]({
    url,
    method,
    headers,
    params,
    data,
    ...config,
  });
};

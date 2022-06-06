import { AxiosRequestConfig, AxiosPromise } from 'axios';

export interface RequestConfig extends AxiosRequestConfig {
  api?: 'yahoo';
}

export type FetchInterface = <T>(config: RequestConfig) => AxiosPromise<T>;

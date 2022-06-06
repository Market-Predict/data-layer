import { AxiosPromise } from 'axios';
import { RequestConfig } from './fetch.interface';
export declare const fetch: <T>({ api, url, method, headers, params, data, ...config }: RequestConfig) => AxiosPromise<T>;

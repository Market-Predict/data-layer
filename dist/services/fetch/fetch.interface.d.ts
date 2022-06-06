import { AxiosRequestConfig, AxiosPromise } from 'axios';
export interface RequestConfig extends AxiosRequestConfig {
    api?: 'yahoo';
}
export declare type FetchInterface = <T>(config: RequestConfig) => AxiosPromise<T>;

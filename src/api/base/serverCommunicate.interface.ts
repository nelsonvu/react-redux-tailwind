import { AxiosRequestConfig } from 'axios';

export interface IServerCommunicate {
  get: (url: string, options: AxiosRequestConfig<any>) => () => Promise<any>;
  post: (url: string, options: AxiosRequestConfig<any>) => () => Promise<any>;
  put: (url: string, options: AxiosRequestConfig<any>) => () => Promise<any>;
  patch: (url: string, options: AxiosRequestConfig<any>) => () => Promise<any>;
  delete: (url: string, options: AxiosRequestConfig<any>) => () => Promise<any>;
}

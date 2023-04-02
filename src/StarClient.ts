import { AxiosResponse } from 'axios';

export interface StarClient {
  get: <T>(url: string, options?: any) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, data: any, options?: any) => Promise<AxiosResponse<T>>;
  put: <T>(url: string, data: any, options?: any) => Promise<AxiosResponse<T>>;
  delete: <T>(url: string, options?: any) => Promise<AxiosResponse<T>>;
}

export interface BareClient {
  get: <T>(url: string, options?: any) => Promise<T>;
  post: <T>(url: string, data: any, options?: any) => Promise<T>;
  put: <T>(url: string, data: any, options?: any) => Promise<T>;
  delete: <T>(url: string, options?: any) => Promise<T>;
}

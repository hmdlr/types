export interface BareClient {
  get: <T>(url: string, options?: any) => Promise<T>;
  post: <T>(url: string, data: any, options?: any) => Promise<T>;
  put: <T>(url: string, data: any, options?: any) => Promise<T>;
  delete: <T>(url: string, options?: any) => Promise<T>;
}

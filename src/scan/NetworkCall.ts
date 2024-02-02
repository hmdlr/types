export interface NetworkCall {
  url: string;
  // GET, POST, PUT, DELETE, etc
  method: string;
  // xhr, fetch, etc
  type: string;
  status: number;
}

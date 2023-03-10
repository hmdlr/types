export interface IUrlRequest {
  url: string;
}

export interface IUrlResponse {
  url: string;
  favicon: string;
  cache?: {
    createdAt: Date;
    score: number;
  }
  similarities?: {
    url: number;
    favicon: number;
  }
}

export interface IBrandUpdatePayload {
  name?: string;
  domain?: string;
  authUrl?: string;
  keywords?: string[];
  title?: string;
  pageLayout?: Buffer;
  logo?: Buffer;
  favicon?: Buffer;
}

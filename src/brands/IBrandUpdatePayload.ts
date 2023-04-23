export interface IBrandUpdatePayload {
  name?: string;
  domain?: string;
  authUrl?: string;
  keywords?: string[];
  title?: string;
  /**
   * The logo URL
   */
  logo?: string;
  pageLayout?: Buffer;
  favicon?: Buffer;
}

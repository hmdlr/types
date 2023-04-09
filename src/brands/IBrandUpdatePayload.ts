export interface IBrandUpdatePayload {
  name?: string;
  domain?: string;
  authUrl?: string;
  keywords?: string[];
  title?: string;
  pageLayout?: Buffer;
  logo?: Express.Multer.File;
  favicon?: Buffer;
}

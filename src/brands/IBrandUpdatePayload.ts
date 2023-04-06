import { IBrand } from './IBrand';

export interface IBrandUpdatePayload extends Partial<IBrand> {
  name?: string;
  domain?: string;
  authUrl?: string;
  keywords?: string[];
  title?: string;
  pageLayout?: string;
  logo?: string;
  favicon?: string;
}

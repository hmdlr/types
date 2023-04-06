import { IBrand } from './IBrand';

export interface IBrandUpdatePayload extends Partial<IBrand> {
  name?: string;
  domain?: string;
  authUrl?: string;
  pageLayout?: string;
  keywords?: string[];
  logo?: string;
  title?: string;
}

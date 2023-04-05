import { IBrand } from './IBrand';

export interface IBrandUpdatePayload extends Partial<IBrand> {
  name?: string;
  domain?: string;
  authUrl?: string;
  favicon?: string;
  keywords?: string[];
  logo?: string;
  title?: string;
}

import { IBrand } from './IBrand';

export interface IBrandUpdatePayload extends Partial<IBrand> {
  name: string;
  domain: string;
  favicon: string;
  logo: string;
  title: string;
}

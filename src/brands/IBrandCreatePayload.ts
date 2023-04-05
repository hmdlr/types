import { IBrand } from './IBrand';

export interface IBrandCreatePayload extends Partial<IBrand> {
  domain: string;
  authUrl: string;
  name: string;
  title: string;
  keywords: string[];
  configId: string
}

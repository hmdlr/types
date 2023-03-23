import { IBrand } from './IBrand';

export interface IBrandCreatePayload extends Partial<IBrand> {
  domain: string;
  id: string;
  name: string;
  title: string;
  keywords: string[];
  configId: string
}

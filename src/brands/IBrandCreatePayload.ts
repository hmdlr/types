import { IBrand } from './IBrand';

export interface IBrandCreatePayload extends IBrand {
  domain: string;
  favicon: string;
  id: string;
  logo: string;
  name: string;
  title: string;
  keywords: string[];
}

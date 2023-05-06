import { FileWithContentType } from '../generics/Types';

export interface IBrandUpdatePayload {
  name?: string;
  domain?: string;
  authUrl?: string;
  title?: string;
  /**
   * The logo URL
   */
  logo?: string;
  favicon?: FileWithContentType;
}

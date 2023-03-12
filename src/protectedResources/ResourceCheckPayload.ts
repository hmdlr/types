import { Resource } from './Resource';

export interface ResourceCheckPayload extends Resource {
  id: string;
  entityId: string;
}

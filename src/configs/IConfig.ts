import { Resource } from '../protectedResources/Resource';

export interface IConfig extends Resource {
  id: string;
  name: string;
  creatorId: string;
}

import { Resource } from '../protectedResources/Resource';
import { IBrand } from '../brands/IBrand';

export interface IConfig extends Resource {
  id: string;
  name: string;
  creatorId: string;
  logo: string;
  groupId: string;
  brands: IBrand[];
}

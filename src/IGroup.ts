import { IUser } from './IUser';

export interface IGroup {
  id: string;
  name: string;
  description: string;
  private: boolean;
  owner: IUser;
}

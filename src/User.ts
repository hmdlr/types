import { UUID } from './UUID';
import { Email } from './Email';

export interface User {
  id: UUID;
  username: string;
  email: Email;
  name: string;
  picture: string;
}

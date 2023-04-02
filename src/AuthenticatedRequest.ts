import { Request } from 'express';

export type AuthenticatedRequest = Request & {
  user?: {
    id: string,
    username: string,
    bearer: string
  }
};

export type WithClient<T> = AuthenticatedRequest & {
  client: T
};

import { IBrand } from "./IBrand";

export interface IBrandGroupDTO extends IBrand {
  belongingGroupId: string;
}

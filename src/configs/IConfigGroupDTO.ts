import { IConfig } from "./IConfig";

export interface IConfigGroupDTO extends IConfig {
  belongingGroupId: string;
}

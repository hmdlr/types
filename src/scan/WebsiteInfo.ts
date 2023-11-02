import { IConfig } from '../configs/IConfig';

export interface WebsiteInfo {
  /**
   * The active config in which this website(rule) belongs to.
   */
  belongsToConfig: IConfig | undefined;
}

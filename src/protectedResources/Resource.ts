import { Metadata } from './Metadata';

export interface Resource {
  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * Resource's additional metadata.
   */
  metadata?: Metadata;
}

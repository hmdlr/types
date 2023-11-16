import { Metadata } from './Metadata';

export interface Resource {
  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * The unique identifier of the group that the resource belongs to.
   */
  groupId: string;

  /**
   * Resource's additional metadata.
   */
  metadata?: Metadata;
}

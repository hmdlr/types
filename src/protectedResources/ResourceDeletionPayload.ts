import { Metadata } from './Metadata';

/**
 * Payload for deleting a resource
 */
export interface ResourceDeletionPayload {
  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * Resource's additional metadata.
   */
  metadata?: Metadata;
}

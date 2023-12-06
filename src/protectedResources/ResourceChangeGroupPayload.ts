import { Metadata } from './Metadata';

/**
 * The payload for the resource change group event.
 */
export interface ResourceChangeGroupPayload {
  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * The unique identifier of the group.
   */
  groupId: string;

  /**
   * Resource's additional metadata.
   */
  metadata?: Metadata;
}

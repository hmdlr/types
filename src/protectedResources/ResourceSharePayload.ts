export interface ResourceSharePayload {
  /* The id of the resources we want to share */
  /* For now, you can only share resources you've created */
  ids: Array<string>;

  /* The id of the owner of the new group (sharer id) */
  ownerId: string;

  /* The id of the users we want to share the resource with */
  inviteeIds: Array<string>;
}

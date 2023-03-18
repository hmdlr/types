export interface ResourceCreationPayload {
  id: string;

  /* The owner will be the first member of the group created for the specified resource */
  ownerId: string;

  /* If specified, the resource will be created in the specified group */
  groupId?: string;

  /* If specified, the resource will be created as a child of the specified resource.
  * As consequence, the resource will be created in the same group as the parent resource. */
  parentId?: string;
}

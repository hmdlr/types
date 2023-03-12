export interface ResourceCreationPayload {
  id: string;

  /* The owner will be the first member of the group created for the specified resource */
  ownerId: string;
}

/**
 * @description This type is used to add a bearer to an object.
 */
export type WithBearer<K> = K & {
  bearer: string
};

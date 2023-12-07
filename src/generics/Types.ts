/**
 * @description This type is used to add a bearer to an object.
 */
export type WithBearer<K> = K & {
  bearer: string
};

/**
 * @description This type is used to add a user to an object.
 */
export type WithUser<K> = K & {
  user: {
    id?: string;
    bearer?: string;
  }
};

export interface FileWithContentType {
  file: Buffer;
  contentType: string;
}

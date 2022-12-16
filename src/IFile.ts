export interface IFile {
  /**
   * The id of the file
   */
  id: string;
  /**
   * The name of the file
   */
  name: string;
  /**
   * The mime type of the file
   */
  mimeType: string;
  /**
   * The size of the file in bytes
   */
  size: number;
  /**
   * The date the file was created
   */
  createdAt: Date;
  /**
   * The date the file was last modified
   */
  updatedAt: Date;
  /**
   * The owner of the file
   */
  ownerId: string;
}

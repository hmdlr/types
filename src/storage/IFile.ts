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
   * The path to the file on the server
   */
  path: string;
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
   * The original uploader of the file
   */
  uploaderId: string;
}

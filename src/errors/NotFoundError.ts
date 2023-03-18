export class NotFoundError extends Error {
  constructor(message, public status = 404) {
    super(message);
    this.name = 'NotFoundError';
  }
}

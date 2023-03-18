export class ConflictError extends Error {
  constructor(message, public status = 409) {
    super(message);
    this.name = 'ConflictError';
  }
}

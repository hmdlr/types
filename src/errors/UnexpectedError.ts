export class UnexpectedError extends Error {
  constructor(message, public status = 500) {
    super(message);
    this.name = 'UnexpectedError';
  }
}

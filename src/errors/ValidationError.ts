export class ValidationError extends Error {
  constructor(message, public status = 400) {
    super(message);
    this.name = 'ValidationError';
  }
}

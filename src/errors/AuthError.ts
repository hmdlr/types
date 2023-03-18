export class AuthError extends Error {
  constructor(message, public status = 401) {
    super(message);
    this.name = 'AuthError';
  }
}

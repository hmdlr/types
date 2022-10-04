export class Email {
  private _email: string;

  constructor(email: string) {
    if (Email.isValid(email)) {
      this._email = email;
    } else {
      throw new Error(`${email} is an invalid email address!`);
    }
  }

  get email(): string {
    return this._email;
  }

  public static isValid(email: string): boolean {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }
}

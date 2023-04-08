export class UUID {
  private readonly _id: string;

  get id(): string {
    return this._id;
  }

  constructor(id: string) {
    if (UUID.isValid(id)) {
      this._id = id;
    } else {
      throw new Error(`${id} is an invalid UUID!`);
    }
  }

  public static isValid(id: string): boolean {
    // eslint-disable-next-line max-len
    return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gm.test(id);
  }

  public static get NIL(): string {
    return '00000000-0000-0000-0000-000000000000';
  }
}

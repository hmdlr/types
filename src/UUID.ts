export class UUID {
  id: string;

  constructor(id: string) {
    if (UUID.isValid(id)) {
      this.id = id;
    } else {
      throw new Error(`${id} is an invalid UUID!`);
    }
  }

  public static isValid(id: string): boolean {
    // eslint-disable-next-line max-len
    return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gm.test(id);
  }
}

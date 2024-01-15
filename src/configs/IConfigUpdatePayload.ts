import { IConfigCreatePayload } from "./IConfigCreatePayload";

export type IConfigUpdatePayload = Omit<IConfigCreatePayload, "logo"> & {
  id: string;
};

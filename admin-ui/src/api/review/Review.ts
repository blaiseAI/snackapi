import { Customer } from "../customer/Customer";

export type Review = {
  comment: string | null;
  createdAt: Date;
  customerId?: Customer | null;
  id: string;
  stars: number | null;
  updatedAt: Date;
};

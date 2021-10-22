import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  customerId?: CustomerWhereUniqueInput | null;
  stars?: number | null;
};

import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  customerId?: CustomerWhereUniqueInput | null;
  stars?: number | null;
};

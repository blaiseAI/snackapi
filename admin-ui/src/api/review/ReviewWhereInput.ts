import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  customerId?: CustomerWhereUniqueInput;
  id?: StringFilter;
  stars?: IntNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  cellphone?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
};

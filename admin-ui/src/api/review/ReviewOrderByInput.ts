import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  id?: SortOrder;
  stars?: SortOrder;
  updatedAt?: SortOrder;
};

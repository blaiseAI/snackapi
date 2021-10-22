import { ReviewWhereInput } from "./ReviewWhereInput";
import { ReviewOrderByInput } from "./ReviewOrderByInput";

export type ReviewFindManyArgs = {
  where?: ReviewWhereInput;
  orderBy?: ReviewOrderByInput;
  skip?: number;
  take?: number;
};

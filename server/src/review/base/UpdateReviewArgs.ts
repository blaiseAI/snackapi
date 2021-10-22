import { ArgsType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ReviewUpdateInput } from "./ReviewUpdateInput";

@ArgsType()
class UpdateReviewArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  where!: ReviewWhereUniqueInput;
  @Field(() => ReviewUpdateInput, { nullable: false })
  data!: ReviewUpdateInput;
}

export { UpdateReviewArgs };

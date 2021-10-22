import { ArgsType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";

@ArgsType()
class DeleteReviewArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  where!: ReviewWhereUniqueInput;
}

export { DeleteReviewArgs };

import { ArgsType, Field } from "@nestjs/graphql";
import { ReviewCreateInput } from "./ReviewCreateInput";

@ArgsType()
class CreateReviewArgs {
  @Field(() => ReviewCreateInput, { nullable: false })
  data!: ReviewCreateInput;
}

export { CreateReviewArgs };

import { ArgsType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";

@ArgsType()
class ReviewFindUniqueArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  where!: ReviewWhereUniqueInput;
}

export { ReviewFindUniqueArgs };

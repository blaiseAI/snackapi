import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { Type } from "class-transformer";
import { ReviewOrderByInput } from "./ReviewOrderByInput";

@ArgsType()
class ReviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReviewWhereInput,
  })
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: ReviewWhereInput;

  @ApiProperty({
    required: false,
    type: ReviewOrderByInput,
  })
  @Field(() => ReviewOrderByInput, { nullable: true })
  @Type(() => ReviewOrderByInput)
  orderBy?: ReviewOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReviewFindManyArgs };

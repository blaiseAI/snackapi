import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class AccountOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["Asc", "Desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  cellphone?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["Asc", "Desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["Asc", "Desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  email?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["Asc", "Desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["Asc", "Desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;
}

export { AccountOrderByInput };

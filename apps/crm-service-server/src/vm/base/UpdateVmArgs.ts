/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VmWhereUniqueInput } from "./VmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VmUpdateInput } from "./VmUpdateInput";

@ArgsType()
class UpdateVmArgs {
  @ApiProperty({
    required: true,
    type: () => VmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VmWhereUniqueInput)
  @Field(() => VmWhereUniqueInput, { nullable: false })
  where!: VmWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VmUpdateInput,
  })
  @ValidateNested()
  @Type(() => VmUpdateInput)
  @Field(() => VmUpdateInput, { nullable: false })
  data!: VmUpdateInput;
}

export { UpdateVmArgs as UpdateVmArgs };

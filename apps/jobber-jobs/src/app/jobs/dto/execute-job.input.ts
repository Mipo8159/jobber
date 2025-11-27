import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { GraphQLString } from 'graphql';
import JSON from 'graphql-type-json';

@InputType()
export class ExecuteJobInput {
  @Field(() => GraphQLString)
  @IsNotEmpty()
  name: string;

  @Field(() => JSON)
  @IsNotEmpty()
  data: object | object[];
}

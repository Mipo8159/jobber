import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { GraphQLString } from 'graphql';

@InputType()
export class LoginInput {
  @Field(() => GraphQLString)
  @IsNotEmpty()
  email: string;

  @Field(() => GraphQLString)
  @IsNotEmpty()
  password: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword } from 'class-validator';
import { GraphQLString } from 'graphql';

@InputType()
export class CreateUserInput {
  @Field(() => GraphQLString)
  @IsEmail()
  email: string;

  @Field(() => GraphQLString)
  @IsStrongPassword()
  password: string;
}

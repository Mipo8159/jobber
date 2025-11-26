import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field(() => GraphQLString)
  email: string;

  @Field(() => GraphQLString)
  createdAt: Date;

  @Field(() => GraphQLString)
  updatedAt: Date;
}

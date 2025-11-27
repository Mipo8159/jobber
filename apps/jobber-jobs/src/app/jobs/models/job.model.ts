import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';

@ObjectType()
export class Job {
  @Field(() => GraphQLString)
  name: string;

  @Field(() => GraphQLString)
  description: string;
}

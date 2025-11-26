import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { User } from '../user/models/user.model';
import { GqlContext } from '@jobber/nestjs';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(@Args('input') input: LoginInput, @Context() ctx: GqlContext) {
    return this.authService.login(input, ctx.res);
  }
}

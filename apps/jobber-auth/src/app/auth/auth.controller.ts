import { Controller, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

import { TokenPayload } from './interfaces/token-payload.interface';
import { UsersService } from '../user/users.service';
import { User } from '../user/models/user.model';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  authenticate(request: {
    user: TokenPayload;
  }): Promise<User> | Observable<User> | User {
    return this.usersService.getUser({ id: request.user.userId });
  }
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { UsersService } from 'src/users/services/users.service';
import { jwtSecret } from './../config';

export function IsAuthenticated() {
  return UseGuards(AuthenticationGuard);
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly usersSrv: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token: string | false =
      req.headers?.authorization?.split(' ')[1] || false;

    if (!token) {
      return false;
    }
    try {
      const result = verify(token, jwtSecret) as any;
      const user = (await this.usersSrv.findById(result.id)) || false;
      if (!user) {
        return false;
      }
      req.currentUser = user;
      return true;
    } catch (err) {
      return false;
    }
  }
}

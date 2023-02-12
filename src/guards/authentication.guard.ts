import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { UsersService } from 'src/users/services/users.service';

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
      const result = verify(token, 'secret') as any;
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

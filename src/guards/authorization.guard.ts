import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/users/entities/users.entity';

export function IsAuthorized(permissions: string[]) {
  return UseGuards(new AuthorizationGuard(permissions));
}

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly permissions: string[]) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const currentUser: Partial<User> =
      context.switchToHttp().getRequest().currentUser || false;
    if (!currentUser) {
      throw new InternalServerErrorException();
    }

    let isAuthorized = false;
    for (let i = 0; i < this.permissions.length; i++) {
      const permission = this.permissions[i];
      if (currentUser?.privileges.includes(permission) || false) {
        isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      throw new ForbiddenException('Not Authorized to access this resource');
    }
    return true;
  }
}

import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';

export function IsAuthorized(permission: string) {
  return UseGuards(new AuthorizationGuard(permission));
}

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly permission: string) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('what');

    const currentUser =
      context.switchToHttp().getRequest().currentUser || false;
    if (!currentUser) {
      throw new InternalServerErrorException();
    }
    const isAuthorized =
      currentUser.privileges?.include(this.permission) || false;
    if (!isAuthorized) {
      throw new ForbiddenException('Not Authorized to access this resource');
    }
    return true;
  }
}

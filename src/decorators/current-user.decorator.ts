import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    const currentUser =
      context.switchToHttp().getRequest().currentUser || false;
    if (!currentUser) {
      throw new InternalServerErrorException();
    }
    return currentUser;
  },
);

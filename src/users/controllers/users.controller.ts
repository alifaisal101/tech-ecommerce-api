import { Controller, Get, Query } from '@nestjs/common';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { IsAuthorized } from 'src/guards/authorization.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ExcludePassword } from '../dtos/res/exclude-password.dto';
import { UsersService } from '../services/users.service';

// Typescript decorator order follows: https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-composition

// The expressions for each decorator are evaluated top-to-bottom.
// The results are then called as functions from bottom-to-top.

@IsAuthorized('admin') // 2st
@IsAuthenticated() // 1st
@Serialize(ExcludePassword)
@Controller('users')
export class UsersController {
  constructor(private readonly usersSrv: UsersService) {}
  @Get()
  async find(@Query('page') page: string) {
    return await this.usersSrv.findAll(parseInt(page));
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { RegisterDto } from '../dtos/req/register.dto';
import { User } from '../entities/users.entity';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersSrv: UsersService) {}

  async register(userDto: RegisterDto) {
    const emailExists = (await this.usersSrv.findOne(userDto.email)) || false;
    if (emailExists) {
      throw new BadRequestException('Email Already exists.');
    }

    const passwordsMatch = userDto.password == userDto.cPassword;
    if (!passwordsMatch) {
      throw new BadRequestException("Passwords Don't Match.");
    }
    delete userDto.cPassword;

    const hashedPw = await hash(userDto.password, 12);
    delete userDto.password;

    const user: User = {
      ...userDto,
      password: hashedPw,
      confirmed: false,
      confirmHash: randomBytes(20).toString('hex'),
    };

    return this.usersSrv.create(user);
  }
}

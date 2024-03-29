import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { sign } from 'jsonwebtoken';
import { jwtExpiration, jwtSecret } from 'src/config';
import { MailService } from 'src/mail/services/mail.service';
import { ConfirmDto } from '../dtos/req/confirm.dto';
import { LoginDto } from '../dtos/req/login.dto';
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
      confirmed: true, // This would be set to false, if we'd be using the confirmation service
      confirmHash: randomBytes(20).toString('hex'),
    };
    try {
      const result = await this.usersSrv.create(user);
      // Here is where the confirmation mail would be sent
      return result;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async confirm(confirmDto: ConfirmDto) {
    const user = (await this.usersSrv.findById(confirmDto.userId)) || false;
    if (!user) {
      throw new NotFoundException();
    }

    if (user.confirmed) {
      throw new BadRequestException('User is already confirmed');
    }

    if (confirmDto.confirmHash !== user.confirmHash) {
      throw new BadRequestException();
    }

    user.confirmHash = undefined;
    user.confirmed = true;
    const result = await user.save();
    // eslint-disable-next-line
    //@ts-ignore
    return { ...result._doc };
  }

  async login(loginDto: LoginDto) {
    const user = (await this.usersSrv.findOne(loginDto.email)) || false;
    if (!user) {
      throw new NotFoundException(
        'No user assoiciated with that email was found.',
      );
    }

    const pwCheck = (await compare(loginDto.password, user.password)) || false;
    if (!pwCheck) {
      throw new BadRequestException('The Provided password is incorrect.');
    }
    delete user.password;

    if (!user.confirmed) {
      throw new BadRequestException('You can only login as a confirmed user.');
    }

    const token = sign({ id: user.id }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    // eslint-disable-next-line
    //@ts-ignore
    return { ...user._doc, token: { value: token, expiresIn: jwtExpiration } };
  }
}

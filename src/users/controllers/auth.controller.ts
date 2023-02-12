import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { LoginDto } from '../dtos/req/login.dto';
import { RegisterDto } from '../dtos/req/register.dto';
import { ExcludePasswordDto } from '../dtos/res/exclude-password.dto';
import { LoggedInDto } from '../dtos/res/loggedin.dto';
import { UserDto } from '../dtos/res/user.dto';
import { AuthService } from '../services/auth.service';

@Serialize(ExcludePasswordDto)
@Controller('auth')
export class AuthController {
  constructor(private readonly authSrv: AuthService) {}

  @Serialize(UserDto, { excludeExtraneousValues: true })
  @Post('/register')
  async register(@Body() body: RegisterDto) {
    return await this.authSrv.register(body);
  }

  @Serialize(LoggedInDto, { excludeExtraneousValues: true })
  @Post('/login')
  async login(@Body() body: LoginDto) {
    return await this.authSrv.login(body);
  }
}

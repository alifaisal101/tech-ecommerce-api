import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { RegisterDto } from '../dtos/req/register.dto';
import { ExcludePasswordDto } from '../dtos/res/exclude-password.dto';
import { AuthService } from '../services/auth.service';

@Serialize(ExcludePasswordDto)
@Controller('auth')
export class AuthController {
  constructor(private readonly authSrv: AuthService) {}
  @Post('/register')
  async register(@Body() body: RegisterDto) {
    const result = await this.authSrv.register(body);
    console.log(result);
    return result;
  }
}

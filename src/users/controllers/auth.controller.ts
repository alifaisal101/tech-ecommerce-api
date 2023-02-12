import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { RegisterDto } from '../dtos/req/register.dto';
import { ExcludePasswordDto } from '../dtos/res/exclude-password.dto';

@Serialize(ExcludePasswordDto)
@Controller('auth')
export class AuthController {
  @Post('/register')
  register(@Body() body: RegisterDto) {
    console.log('you passed', body);
  }
}

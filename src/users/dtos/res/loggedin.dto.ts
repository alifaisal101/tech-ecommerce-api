import { IntersectionType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { UserDto } from './user.dto';

export class LoggedInDto extends IntersectionType(UserDto) {
  @Expose()
  token: string;
}

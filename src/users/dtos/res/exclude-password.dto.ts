import { Exclude } from 'class-transformer';

export class ExcludePasswordDto {
  @Exclude()
  password: string;
}

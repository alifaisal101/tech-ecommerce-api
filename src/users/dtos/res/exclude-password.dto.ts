import { Exclude } from 'class-transformer';

export class ExcludePassword {
  @Exclude()
  password: string;
}

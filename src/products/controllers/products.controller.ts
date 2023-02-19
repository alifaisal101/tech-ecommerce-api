import { Body, Controller, Post } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { User } from 'src/users/entities/users.entity';
import { CreateDto } from '../dtos/req/create.dto';

@Controller('products')
export class ProductsController {
  @IsAuthenticated()
  @Post('/add')
  create(@Body() body: CreateDto, @CurrentUser() user: Partial<User>) {
    console.log(user, body);
  }
}

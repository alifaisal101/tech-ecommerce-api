import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}

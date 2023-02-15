import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { users_per_page } from 'src/config';
import { filterObj } from 'src/util/helpers/objects.helper';
import { User, UserDocument } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findById(id: ObjectId) {
    return this.userModel.findById(id, { password: 0 });
  }

  findOne(email?: string) {
    const filter = filterObj({ email });
    return this.userModel.findOne(filter);
  }

  findAll(page?: number) {
    page = page || 1;
    const skip = (page - 1) * users_per_page;

    return this.userModel
      .find({ password: 0 })
      .skip(skip)
      .limit(users_per_page);
  }

  updateById(id: ObjectId, newUser: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, newUser);
  }

  create(user: User) {
    if (user.isCompany) {
      delete user?.fname;
      delete user?.lname;
    } else {
      delete user?.companyName;
    }
    return this.userModel.create(user);
  }
}

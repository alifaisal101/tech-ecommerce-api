import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { objKeysValidator } from 'src/util/helpers/objects.helper';
import { ComputersDto } from '../dtos/computers.dto';
import { Computer, ComputerDocument } from '../entites/computer.entity';

@Injectable()
export class ComputersService {
  constructor(
    @InjectModel(Computer.name) private computerModel: Model<ComputerDocument>,
  ) {}

  create(computer: ComputersDto) {
    const invalidObject =
      objKeysValidator(computer, ['laptop', 'desktop', 'allInOne']).length >
        1 || false;
    if (invalidObject) {
      throw new BadRequestException('Only one category should be included');
    }
  }
}

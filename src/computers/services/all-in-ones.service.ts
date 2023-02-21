import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AllInOneDto } from '../dtos/allInOne.dto';
import { AllInOne, AllInOneDocument } from '../entites/allInOne.entity';

@Injectable()
export class AllInOnesService {
  constructor(
    @InjectModel(AllInOne.name) private allInOneModel: Model<AllInOneDocument>,
  ) {}

  create(allInOne: AllInOneDto) {
    return this.allInOneModel.create(allInOne);
  }
}

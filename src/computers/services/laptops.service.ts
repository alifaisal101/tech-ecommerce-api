import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LaptopDto } from '../dtos/laptop.dto';
import { Laptop, LaptopDocument } from '../entites/laptop.entity';

@Injectable()
export class LaptopsService {
  constructor(
    @InjectModel(Laptop.name) private laptopModel: Model<LaptopDocument>,
  ) {}

  create(laptop: LaptopDto) {
    return this.laptopModel.create(laptop);
  }
}

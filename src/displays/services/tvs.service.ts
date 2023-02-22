import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TvDto } from '../dtos/tv.dto';
import { Tv, TvDocument } from '../enities/tv.entity';

@Injectable()
export class TvsService {
  constructor(@InjectModel(Tv.name) private tvModel: Model<TvDocument>) {}

  create(tv: TvDto) {
    return this.tvModel.create(tv);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DisplaysDto } from '../dtos/displays.dto';
import { Display, DisplayDocument } from '../enities/display.entity';

@Injectable()
export class DisplaysService {
  constructor(
    @InjectModel(Display.name) private displayModel: Model<DisplayDocument>,
  ) {}

  create(display: DisplaysDto) {
    console.log(display);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DesktopDto } from '../dtos/desktop.dto';
import { Desktop, DesktopDocument } from '../entites/desktop.entity';

@Injectable()
export class DesktopsService {
  constructor(
    @InjectModel(Desktop.name) private desktopModel: Model<DesktopDocument>,
  ) {}

  create(desktop: DesktopDto) {
    return this.desktopModel.create(desktop);
  }
}

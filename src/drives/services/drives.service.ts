import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DrivesDto } from '../dtos/drives.dto';
import { Drive, DriveDocument } from '../entites/drive.entity';

@Injectable()
export class DrivesService {
  constructor(
    @InjectModel(Drive.name) private driveModel: Model<DriveDocument>,
  ) {}

  create(drive: DrivesDto) {
    return this.driveModel.create(drive);
  }
}

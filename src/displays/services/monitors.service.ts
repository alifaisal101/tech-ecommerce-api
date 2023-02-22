import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MonitorDto } from '../dtos/monitor.dto';
import { Monitor, MonitorDocument } from '../enities/monitor.entity';

@Injectable()
export class MonitorsService {
  constructor(
    @InjectModel(Monitor.name) private monitorModel: Model<MonitorDocument>,
  ) {}

  create(monitor: MonitorDto) {
    return this.monitorModel.create(monitor);
  }
}

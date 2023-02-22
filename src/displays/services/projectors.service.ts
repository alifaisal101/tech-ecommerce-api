import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectorDto } from '../dtos/projector.dto';
import { Projector, ProjectorDocument } from '../enities/projector.entity';

@Injectable()
export class ProjectorsService {
  constructor(
    @InjectModel(Projector.name)
    private projectorModel: Model<ProjectorDocument>,
  ) {}

  create(projector: ProjectorDto) {
    return this.projectorModel.create(projector);
  }
}

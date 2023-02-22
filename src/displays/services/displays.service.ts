import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isNotEmptyObject } from 'class-validator';
import { Model } from 'mongoose';
import {
  deleteObjProp,
  objKeysValidator,
} from 'src/util/helpers/objects.helper';
import { DisplaysDto } from '../dtos/displays.dto';
import { MonitorDto } from '../dtos/monitor.dto';
import { ProjectorDto } from '../dtos/projector.dto';
import { TvDto } from '../dtos/tv.dto';
import { Display, DisplayDocument } from '../enities/display.entity';
import { MonitorsService } from './monitors.service';
import { ProjectorsService } from './projectors.service';
import { TvsService } from './tvs.service';

type displaySubCategories = MonitorDto | ProjectorDto | TvDto | undefined;

@Injectable()
export class DisplaysService {
  constructor(
    @InjectModel(Display.name) private displayModel: Model<DisplayDocument>,
    private monitorsSrv: MonitorsService,
    private projectorsSrv: ProjectorsService,
    private tvsSrv: TvsService,
  ) {}

  async create(display: DisplaysDto) {
    const subCategoriesKeys = ['monitor', 'projector', 'tv'];

    const invalidObject =
      objKeysValidator(display, subCategoriesKeys).length > 1 || false;
    if (invalidObject) {
      throw new BadRequestException('Only one sub category should be included');
    }

    const [leanDisplay, subCategoryName, subCategory] = deleteObjProp(
      display,
      subCategoriesKeys,
    ) as [Display, string | undefined, displaySubCategories];

    const subCategoryId = {};

    try {
      if (isNotEmptyObject(subCategory)) {
        switch (subCategoryName) {
          case 'monitor':
            const monitor = await this.monitorsSrv.create(
              subCategory as MonitorDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = monitor._doc._id;
            break;

          case 'projector':
            const projector = await this.projectorsSrv.create(
              subCategory as ProjectorDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = projector._doc._id;
            break;

          case 'tv':
            const tv = await this.tvsSrv.create(subCategory as TvDto);

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = tv._doc._id;
            break;
        }
      }

      return this.displayModel.create({ ...leanDisplay, ...subCategoryId });
    } catch (err) {
      return new InternalServerErrorException();
    }
  }
}

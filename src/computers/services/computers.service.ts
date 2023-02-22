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
import { AllInOneDto } from '../dtos/allInOne.dto';
import { ComputersDto } from '../dtos/computers.dto';
import { DesktopDto } from '../dtos/desktop.dto';
import { LaptopDto } from '../dtos/laptop.dto';
import { Computer, ComputerDocument } from '../entites/computer.entity';
import { AllInOnesService } from './all-in-ones.service';
import { DesktopsService } from './desktops.service';
import { LaptopsService } from './laptops.service';

type computerSubCategories = DesktopDto | LaptopDto | AllInOneDto;

@Injectable()
export class ComputersService {
  constructor(
    @InjectModel(Computer.name) private computerModel: Model<ComputerDocument>,
    private readonly desktopSrv: DesktopsService,
    private readonly laptopSrv: LaptopsService,
    private readonly allInOneSrv: AllInOnesService,
  ) {}

  async create(computer: ComputersDto) {
    const subCategoryKeys = ['laptop', 'desktop', 'allInOne'];

    const invalidObject =
      objKeysValidator(computer, subCategoryKeys).length > 1 || false;
    if (invalidObject) {
      throw new BadRequestException('Only one sub category should be included');
    }

    const [leanComputer, subCategoryName, subCategory] = deleteObjProp(
      computer,
      subCategoryKeys,
    ) as [Computer, string | undefined, computerSubCategories];

    const subCategoryId = {};

    try {
      if (isNotEmptyObject(subCategory)) {
        switch (subCategoryName) {
          case 'desktop':
            const desktop = await this.desktopSrv.create(
              subCategory as DesktopDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = desktop?._doc._id;
            break;
          case 'laptop':
            const laptop = await this.laptopSrv.create(
              subCategory as LaptopDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = laptop?._doc._id;
            break;
          case 'allInOne':
            const allInOne = await this.allInOneSrv.create(
              subCategory as AllInOneDto,
            );

            // eslint-disable-next-line
            //@ts-ignore
            subCategoryId[`${subCategoryName}Id`] = allInOne?._doc._id;
            break;
        }
      }

      return this.computerModel.create({ ...leanComputer, ...subCategoryId });
    } catch (err) {
      return new InternalServerErrorException();
    }
  }
}

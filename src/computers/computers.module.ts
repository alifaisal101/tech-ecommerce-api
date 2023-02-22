import { Module } from '@nestjs/common';
import { ComputersService } from './services/computers.service';
import { AllInOnesService } from './services/all-in-ones.service';
import { LaptopsService } from './services/laptops.service';
import { DesktopsService } from './services/desktops.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Computer, ComputerSchema } from './entites/computer.entity';
import { Laptop, LaptopSchema } from './entites/laptop.entity';
import { Desktop, DesktopSchema } from './entites/desktop.entity';
import { AllInOne, AllInOneSchema } from './entites/allInOne.entity';

@Module({
  providers: [
    ComputersService,
    AllInOnesService,
    LaptopsService,
    DesktopsService,
  ],
  imports: [
    MongooseModule.forFeature([
      { name: Computer.name, schema: ComputerSchema },
      { name: Laptop.name, schema: LaptopSchema },
      { name: Desktop.name, schema: DesktopSchema },
      { name: AllInOne.name, schema: AllInOneSchema },
    ]),
  ],
  exports: [ComputersService],
})
export class ComputersModule {}

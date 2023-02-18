import { Module } from '@nestjs/common';
import { ComputersService } from './services/computers.service';
import { AllInOnesService } from './services/all-in-ones.service';
import { LaptopsService } from './services/laptops.service';
import { DesktopsService } from './services/desktops.service';

@Module({
  providers: [ComputersService, AllInOnesService, LaptopsService, DesktopsService]
})
export class ComputersModule {}

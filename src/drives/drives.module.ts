import { Module } from '@nestjs/common';
import { DrivesService } from './services/drives.service';

@Module({
  providers: [DrivesService]
})
export class DrivesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Drive, DriveSchema } from './entites/drive.entity';
import { DrivesService } from './services/drives.service';

@Module({
  providers: [DrivesService],
  imports: [
    MongooseModule.forFeature([{ name: Drive.name, schema: DriveSchema }]),
  ],
  exports: [DrivesService],
})
export class DrivesModule {}

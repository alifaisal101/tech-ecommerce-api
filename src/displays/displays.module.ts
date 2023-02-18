import { Module } from '@nestjs/common';
import { DisplaysService } from './services/displays.service';
import { MonitorsService } from './services/monitors.service';
import { ProjectorsService } from './services/projectors.service';
import { TvsService } from './services/tvs.service';

@Module({
  providers: [DisplaysService, MonitorsService, ProjectorsService, TvsService]
})
export class DisplaysModule {}

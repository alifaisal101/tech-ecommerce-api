import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Display, DisplaySchema } from './enities/display.entity';
import { Monitor, MonitorSchema } from './enities/monitor.entity';
import { Projector, ProjectorSchema } from './enities/projector.entity';
import { Tv, TvSchema } from './enities/tv.entity';
import { DisplaysService } from './services/displays.service';
import { MonitorsService } from './services/monitors.service';
import { ProjectorsService } from './services/projectors.service';
import { TvsService } from './services/tvs.service';

@Module({
  providers: [DisplaysService, MonitorsService, ProjectorsService, TvsService],
  imports: [
    MongooseModule.forFeature([
      { name: Display.name, schema: DisplaySchema },
      { name: Monitor.name, schema: MonitorSchema },
      { name: Projector.name, schema: ProjectorSchema },
      { name: Tv.name, schema: TvSchema },
    ]),
  ],
  exports: [DisplaysService],
})
export class DisplaysModule {}

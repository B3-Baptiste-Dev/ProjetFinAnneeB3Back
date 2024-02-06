import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { AnnoncesModule } from '../annonces/annonces.module';
import { MapController } from './map.controller';

@Module({
  imports: [AnnoncesModule],
  providers: [MapService],
  controllers: [MapController],
})
export class MapModule {}

import { Controller, Get, Query } from '@nestjs/common';
import { MapService } from './map.service';
import { Annonce } from '../entities/annonce.entity';

@Controller('map')
export class MapController {
  constructor(private mapService: MapService) {}

  @Get('annonces')
  findInArea(
    @Query('latMin') latMin: number,
    @Query('latMax') latMax: number,
    @Query('longMin') longMin: number,
    @Query('longMax') longMax: number,
    @Query('userLat') userLat: number,
    @Query('userLong') userLong: number,
  ): Promise<Annonce[]> {
    return this.mapService.findAnnoncesInArea(
      latMin,
      latMax,
      longMin,
      longMax,
      userLat,
      userLong,
    );
  }
}
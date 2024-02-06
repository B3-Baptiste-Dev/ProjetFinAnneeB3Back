import { Controller, Get, Query } from '@nestjs/common';
import { AnnonceService } from './annonces.service';
import { Annonce } from '../entities/annonce.entity';

@Controller('annonces')
export class AnnonceController {
  constructor(private annonceService: AnnonceService) {}

  @Get()
  findAll(): Promise<Annonce[]> {
    return this.annonceService.findAll();
  }

  @Get('area')
  findInArea(
    @Query('latMin') latMin: number,
    @Query('latMax') latMax: number,
    @Query('longMin') longMin: number,
    @Query('longMax') longMax: number,
    @Query('userLat') userLat: number, // Nouveau
    @Query('userLong') userLong: number, // Nouveau
  ): Promise<Annonce[]> {
    return this.annonceService.findInArea(
      latMin,
      latMax,
      longMin,
      longMax,
      userLat,
      userLong,
    );
  }
}

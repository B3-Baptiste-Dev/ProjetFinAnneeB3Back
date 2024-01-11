import { Controller, Get, Query } from '@nestjs/common';
import { AnnonceService } from './annonces.service';
import { Demande } from '../entities/demande.entity';

@Controller('annonces')
export class AnnonceController {
  constructor(private annonceService: AnnonceService) {}

  @Get()
  findAll(): Promise<Demande[]> {
    return this.annonceService.findAll();
  }

  @Get('area')
  findInArea(
    @Query('latMin') latMin: number,
    @Query('latMax') latMax: number,
    @Query('longMin') longMin: number,
    @Query('longMax') longMax: number,
  ): Promise<Demande[]> {
    return this.annonceService.findInArea(latMin, latMax, longMin, longMax);
  }
}

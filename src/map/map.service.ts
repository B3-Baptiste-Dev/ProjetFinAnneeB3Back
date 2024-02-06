import { Injectable } from '@nestjs/common';
import { AnnonceService } from '../annonces/annonces.service';
import { Annonce } from '../entities/annonce.entity';

@Injectable()
export class MapService {
  constructor(private annonceService: AnnonceService) {}
  async findAnnoncesInArea(
    latMin: number,
    latMax: number,
    longMin: number,
    longMax: number,
    userLat: number,
    userLong: number,
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

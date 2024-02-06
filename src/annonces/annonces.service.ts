import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Annonce } from '../entities/annonce.entity';
import { getDistance } from 'geolib';

@Injectable()
export class AnnonceService {
  constructor(
    @InjectRepository(Annonce)
    private annonceRepository: Repository<Annonce>,
  ) {}

  async findAll(): Promise<Annonce[]> {
    return await this.annonceRepository.find();
  }

  async findInArea(
    latMin: number,
    latMax: number,
    longMin: number,
    longMax: number,
    userLat: number,
    userLong: number,
  ): Promise<Annonce[]> {
    const annonces = await this.annonceRepository
      .createQueryBuilder('demande')
      .leftJoinAndSelect('demande.materiel', 'materiel')
      .where('demande.latitude BETWEEN :latMin AND :latMax', { latMin, latMax })
      .andWhere('demande.longitude BETWEEN :longMin AND :longMax', {
        longMin,
        longMax,
      })
      .getMany();

    return annonces.map((annonce) => {
      if (annonce.latitude != null && annonce.longitude != null && userLat != null && userLong != null) {
        try {
          const distance = getDistance(
            { latitude: annonce.latitude, longitude: annonce.longitude },
            { latitude: userLat, longitude: userLong }
          ) / 1000;
          annonce.distance = distance; // Assurez-vous que votre entité Annonce a une propriété distance pour stocker cette valeur
        } catch (error) {
          console.error('Error calculating distance:', error);
        }
      } else {
        console.error('Latitude or longitude is undefined for annonce:', annonce);
      }
      return annonce; // Retourne l'annonce avec la distance calculée ou non
    });
  }
}

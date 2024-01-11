import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demande } from '../entities/demande.entity';

@Injectable()
export class AnnonceService {
  constructor(
    @InjectRepository(Demande)
    private annonceRepository: Repository<Demande>,
  ) {}

  async findAll(): Promise<Demande[]> {
    return await this.annonceRepository.find();
  }
  async findInArea(
    latMin: number,
    latMax: number,
    longMin: number,
    longMax: number,
  ): Promise<Demande[]> {
    return this.annonceRepository
      .createQueryBuilder('demande')
      .leftJoinAndSelect('demande.materiel', 'materiel')
      .where('demande.latitude BETWEEN :latMin AND :latMax', { latMin, latMax })
      .andWhere('demande.longitude BETWEEN :longMin AND :longMax', {
        longMin,
        longMax,
      })
      .getMany();
  }
}

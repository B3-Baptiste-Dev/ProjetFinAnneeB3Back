import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';

import { Annonce } from '../entities/annonce.entity';
import { Avis } from '../entities/avis.entity';
import { Categorie } from '../entities/categories.entity';
import { Materiel } from '../entities/materiel.entity';
import { Utilisateur } from '../entities/utilisateur.entity';
import { Transaction } from '../entities/transaction.entity';

import { SeedService } from './seeder.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Annonce, Avis, Categorie, Materiel, Utilisateur, Transaction]),
  ],
  providers: [SeedService],
})
export class SeedModule {}

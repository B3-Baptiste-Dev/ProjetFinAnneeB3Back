import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { Avis } from './entities/avis.entity';
import { Categorie } from './entities/categories.entity';
import { Annonce } from './entities/annonce.entity';
import { Materiel } from './entities/materiel.entity';
import { Utilisateur } from './entities/utilisateur.entity';
import { Transaction } from './entities/transaction.entity';

import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AnnoncesModule } from './annonces/annonces.module';
import { UsersModule } from './users/users.module';
import { MapModule } from './map/map.module';
import { SeedModule } from "./seed/seeder.module";

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Avis, Categorie, Annonce, Materiel, Transaction, Utilisateur],
      synchronize: true,
    }),
    UtilisateurModule,
    AnnoncesModule,
    UsersModule,
    MapModule,
    SeedModule,
  ],
})
export class AppModule {}

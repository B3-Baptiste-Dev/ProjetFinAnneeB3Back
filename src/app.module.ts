import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { Avis } from './entities/avis.entity';
import { Categorie } from './entities/categories.entity';
import { Demande } from './entities/demande.entity';
import { Materiel } from './entities/materiel.entity';
import { Utilisateur } from './entities/utilisateur.entity';
import { Transaction } from './entities/transaction.entity';
import { AnnoncesModule } from './annonces/annonces.module';
import { AnnonceService } from './annonces/annonces.service';
import { AnnonceController } from './annonces/annonces.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'azertyuiop',
      database: 'bricopartage',
      entities: [Avis, Categorie, Demande, Materiel, Transaction, Utilisateur],
      synchronize: true,
    }),
    UtilisateurModule,
    AnnoncesModule,
    TypeOrmModule.forFeature([Demande]),
  ],
  providers: [AnnonceService],
  controllers: [AnnonceController],
})
export class AppModule {}

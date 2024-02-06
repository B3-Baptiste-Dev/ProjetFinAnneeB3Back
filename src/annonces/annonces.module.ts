import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annonce } from '../entities/annonce.entity';
import { AnnonceService } from './annonces.service';
import { AnnonceController } from './annonces.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Annonce])],
  providers: [AnnonceService],
  exports: [AnnonceService],
  controllers: [AnnonceController],
})
export class AnnoncesModule {}
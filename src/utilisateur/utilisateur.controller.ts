import { Controller, Get } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../entities/utilisateur.entity';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  findAll(): Promise<Utilisateur[]> {
    return this.utilisateurService.findAll();
  }
}

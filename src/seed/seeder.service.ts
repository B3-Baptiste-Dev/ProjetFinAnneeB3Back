import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Annonce } from '../entities/annonce.entity';
import { Avis } from '../entities/avis.entity';
import { Categorie } from '../entities/categories.entity';
import { Materiel } from '../entities/materiel.entity';
import { Utilisateur } from '../entities/utilisateur.entity';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Annonce)
    private readonly annonceRepository: Repository<Annonce>,
    @InjectRepository(Avis)
    private readonly avisRepository: Repository<Avis>,
    @InjectRepository(Categorie)
    private readonly categorieRepository: Repository<Categorie>,
    @InjectRepository(Materiel)
    private readonly materielRepository: Repository<Materiel>,
    @InjectRepository(Utilisateur)
    private readonly utilisateurRepository: Repository<Utilisateur>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async seed() {
    // Utilisateurs
    const user1 = await this.utilisateurRepository.save({
      nom: "Jean Dupont",
      email: "jean.dupont@example.com",
      mot_de_passe: "password123",
      telephone: "0123456789",
      adresse: "123 Rue de Paris, 75001 Paris",
      ville: "Paris",
    });

    const user2 = await this.utilisateurRepository.save({
      nom: "Marie Curie",
      email: "marie.curie@example.com",
      mot_de_passe: "securepassword",
      telephone: "0987654321",
      adresse: "456 Avenue des Champs-Élysées, 75008 Paris",
      ville: "Paris",
    });

    // Catégories
    const photoCategorie = await this.categorieRepository.save({ nom: "Photographie" });
    const audioCategorie = await this.categorieRepository.save({ nom: "Audio" });

    // Matériels
    const materiel1 = await this.materielRepository.save({
      utilisateur: user1,
      categorie: photoCategorie,
      nom: "Appareil Photo Canon",
      description: "Canon EOS 5D Mark IV, parfait pour les événements.",
      disponible: true,
    });

    const materiel2 = await this.materielRepository.save({
      utilisateur: user2,
      categorie: audioCategorie,
      nom: "Microphone Shure",
      description: "Shure SM7B, idéal pour les enregistrements studio.",
      disponible: true,
    });

    // Annonces
    await this.annonceRepository.save([
      {
        demandeur: user1,
        materiel: materiel1,
        date_demande: new Date('2024-02-01T10:00:00'),
        details: "Besoin d'un appareil photo pour un événement."
      },
      {
        demandeur: user2,
        materiel: materiel2,
        date_demande: new Date('2024-02-02T15:00:00'),
        details: "Recherche d'un microphone pour enregistrement."
      }
    ]);

    // Avis
    await this.avisRepository.save([
      {
        auteur: user1,
        materiel: materiel1,
        note: 4,
        commentaire: "Très bon état et fonctionnel.",
        date_creation: new Date('2024-02-03T12:00:00'),
      },
      {
        auteur: user2,
        materiel: materiel2,
        note: 5,
        commentaire: "Excellent produit, recommande fortement.",
        date_creation: new Date('2024-02-04T09:00:00'),
      }
    ]);

    // Transactions
    await this.transactionRepository.save([
      {
        preteur: user1,
        emprunteur: user2,
        materiel: materiel1,
        date_debut: new Date('2024-02-05'),
        date_fin: new Date('2024-02-10'),
        statut: "En cours"
      },
      {
        preteur: user2,
        emprunteur: user1,
        materiel: materiel2,
        date_debut: new Date('2024-02-15'),
        date_fin: new Date('2024-02-20'),
        statut: "Terminée"
      }
    ]);
    console.log('Seeding complete!');
  }
}

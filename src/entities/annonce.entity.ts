import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Materiel } from './materiel.entity';

@Entity('annonces')
export class Annonce {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  demandeur: Utilisateur;

  @ManyToOne(() => Materiel)
  materiel: Materiel;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_demande: Date;

  @Column({ length: 50, default: 'En attente' })
  statut: string;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitude: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ville: string;

  @Column({ type: 'float', nullable: true })
  distance: number;
}

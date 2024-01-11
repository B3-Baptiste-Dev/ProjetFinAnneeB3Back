import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Materiel } from './materiel.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  preteur: Utilisateur;

  @ManyToOne(() => Utilisateur)
  emprunteur: Utilisateur;

  @ManyToOne(() => Materiel)
  materiel: Materiel;

  @Column({ type: 'timestamp' })
  date_debut: Date;

  @Column({ type: 'timestamp' })
  date_fin: Date;

  @Column({ length: 50, default: 'En cours' })
  statut: string;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Materiel } from './materiel.entity';

@Entity('avis')
export class Avis {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  auteur: Utilisateur;

  @ManyToOne(() => Materiel)
  materiel: Materiel;

  @Column()
  note: number;

  @Column({ type: 'text' })
  commentaire: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_avis: Date;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Categorie } from './categories.entity';

@Entity('materiel')
export class Materiel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  utilisateur: Utilisateur;

  @ManyToOne(() => Categorie)
  categorie: Categorie;

  @Column({ length: 100 })
  nom: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: true })
  disponibilite: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ville: string;

  @Column({ type: 'date', nullable: true })
  date_debut_dispo: Date;

  @Column({ type: 'date', nullable: true })
  date_fin_dispo: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_ajout: Date;
}

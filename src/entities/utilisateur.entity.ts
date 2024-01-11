import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('utilisateurs')
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nom: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  mot_de_passe: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  telephone: string;

  @Column({ type: 'text', nullable: true })
  adresse: string;

  @Column({ type: 'text', nullable: true })
  photo_profil: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ville: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_inscription: Date;
}

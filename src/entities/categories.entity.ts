import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nom: string;
}

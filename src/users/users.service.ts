import { Injectable } from '@nestjs/common';
import { SignupDto } from './signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from '../entities/utilisateur.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Utilisateur)
    private userRepository: Repository<Utilisateur>,
  ) {}

  async createUser(signupDto: SignupDto): Promise<Utilisateur> {
    const {
      nom,
      email,
      mot_de_passe,
      telephone,
      adresse,
      photo_profil,
      ville,
      date_inscription,
    } = signupDto;
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newUser = this.userRepository.create({
      nom,
      email,
      mot_de_passe: hashedPassword,
      telephone,
      adresse,
      photo_profil,
      ville,
      date_inscription,
    });
    await this.userRepository.save(newUser);

    return newUser;
  }

  async findByEmail(email: string): Promise<Utilisateur | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}

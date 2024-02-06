// signup.dto.ts
export class SignupDto {
  nom: string;
  email: string;
  mot_de_passe: string;
  telephone?: string;
  adresse?: string;
  photo_profil?: string;
  ville?: string;
  date_inscription?: Date;
}

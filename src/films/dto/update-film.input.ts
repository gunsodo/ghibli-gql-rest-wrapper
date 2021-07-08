import { CreateFilmInput } from './create-film.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFilmInput extends PartialType(CreateFilmInput) {
  id: string;
}

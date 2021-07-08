import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FilmsService } from './films.service';
// import { CreateFilmInput } from './dto/create-film.input';
// import { UpdateFilmInput } from './dto/update-film.input';

import { CreateFilmInput, Film } from 'src/graphql';
import { UpdateFilmInput } from 'src/graphql';

@Resolver(() => Film)
export class FilmsResolver {
  constructor(private readonly filmsService: FilmsService) {}

  @Query('films')
  findAll() {
    return this.filmsService.findAll();
  }

  @Query('film')
  findOne(@Args('id') id: string) {
    return this.filmsService.findOne(id);
  }
}

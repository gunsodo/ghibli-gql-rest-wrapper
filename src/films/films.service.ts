import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
// import { CreateFilmInput } from './dto/create-film.input';
// import { UpdateFilmInput } from './dto/update-film.input';

import { map } from 'rxjs/operators';


@Injectable()
export class FilmsService {

  constructor(private httpService: HttpService) { }

  private apiUrl = 'https://ghibliapi.herokuapp.com';

  private filmSynonyms = {
    release_date: "releaseDate",
    running_time: "runningTime",
    rt_score: "ratingScore",
    original_title: "originalTitle",
    original_title_romanised: "originalTitleRomanised"
  }

  private speciesSynonyms = {
    eye_colors: "eyeColors",
    hair_colors: "hairColors"
  }

  private resolveFilm(obj: any): any {
    // Resolve field names: renaming some keys
    for (const [k, v] of Object.entries(this.filmSynonyms)) {
      delete Object.assign(obj, {[v]: obj[k] })[k];
    }

    obj["species"] = obj["species"].map(
      (s: string) => lastValueFrom(this.findSpecies(s)).then(res => res)
    )

    return obj;
  }

  private resolveSpecies(obj: any): any {
    // Resolve field names: renaming some keys
    for (const [k, v] of Object.entries(this.speciesSynonyms)) {
      delete Object.assign(obj, {[v]: obj[k] })[k];
    }

    return obj;
  }

  private helpPipeFilm(url: string) {
    return this.httpService.get(url).pipe(
      map((axiosResponse) => {
        let film = axiosResponse.data;
        film = this.resolveFilm(film);
        return film;
      }));
  }

  private helpPipeSpecies(url: string) {
    return this.httpService.get(url).pipe(
      map((axiosResponse) => {
        let species = axiosResponse.data;
        species = this.resolveSpecies(species);
        return species;
      }));
  }

  findAll() {
    return this.helpPipeFilm(this.apiUrl + `/films`);
  }

  findOne(id: string) {
    return this.helpPipeFilm(this.apiUrl + `/films/${id}`);
  }

  findSpecies(url: string) {
    return this.helpPipeSpecies(url);
  }
}

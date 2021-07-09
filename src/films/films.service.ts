import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { CreateFilmInput } from './dto/create-film.input';
// import { UpdateFilmInput } from './dto/update-film.input';

import { map } from 'rxjs/operators';


@Injectable()
export class FilmsService {

  constructor(private httpService: HttpService) { }

  private apiUrl = 'https://ghibliapi.herokuapp.com/films';

  private synonyms = {
    release_date: "releaseDate",
    running_time: "runningTime",
    rt_score: "ratingScore",
    original_title: "originalTitle",
    original_title_romanised: "originalTitleRomanised"
  }

  private helpPipe(url: string) {
    return this.httpService.get(url).pipe(
      map((axiosResponse) => {
        let film = axiosResponse.data;

        // Resolve field names: renaming some keys
        for (const [k, v] of Object.entries(this.synonyms)) {
          delete Object.assign(film, {[v]: film[k] })[k];
        }

        console.log(film);
        return film;
      }));
  }

  findAll() {
    return this.helpPipe(this.apiUrl);
  }

  findOne(id: string) {
    return this.helpPipe(this.apiUrl + `/${id}`);
  }
}

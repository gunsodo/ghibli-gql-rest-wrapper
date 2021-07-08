import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { CreateFilmInput } from './dto/create-film.input';
// import { UpdateFilmInput } from './dto/update-film.input';

import { map } from 'rxjs/operators';


@Injectable()
export class FilmsService {

  constructor(private httpService: HttpService) { }

  private apiUrl = 'https://ghibliapi.herokuapp.com/films';

  private helpPipe(url: string) {
    return this.httpService.get(url).pipe(
      map((axiosResponse) => {
        let film = axiosResponse.data;
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

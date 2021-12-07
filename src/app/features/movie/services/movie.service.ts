import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '@core/services/base.service';
import { Movie } from '@features/movie/interfaces/movie';
import {
  RequestData,
  ResponseData,
} from '@features/movie/interfaces/request-data';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BaseService<Movie, Movie> {
  constructor(http: HttpClient) {
    super(http, '/movie');
  }
  getMovies(requestData: RequestData) {
    const filter = requestData.filter ?? 'popular';
    return this.http.get<ResponseData<Movie>>(`${this.endpoint}/${filter}`, {
      params: { page: requestData.page },
    });
  }
}

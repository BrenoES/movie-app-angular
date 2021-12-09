import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '@core/services/base.service';
import { Movie } from '@features/movie/interfaces/movie';
import {
  RequestData,
  ResponseData,
} from '@features/movie/interfaces/request-data';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BaseService<Movie, Movie> {
  constructor(http: HttpClient) {
    super(http, '/movie');
  }

  searchMovies(requestData: RequestData) {
    return this.http.get<ResponseData<Movie>>(
      `${environment.API_URL}/search/movie`,
      {
        params: { query: requestData.query as string, page: requestData.page },
      }
    );
  }
  getMovies(requestData: RequestData) {
    const filter = requestData.filter ?? 'popular';
    return this.http.get<ResponseData<Movie>>(`${this.endpoint}/${filter}`, {
      params: { page: requestData.page },
    });
  }

  getGenres() {
    return this.http.get(`${environment.API_URL}/genre/movie/list`);
  }

  getActors(id: string) {
    return this.http.get(`${this.endpoint}/${id}/credits`);
  }

  getMovieImages(id: string) {
    return this.http.get(`${this.endpoint}/${id}/images`, {
      params: { language: 'null' },
    });
  }

  getRecommendations(id: string) {
    return this.http.get(`${this.endpoint}/${id}/recommendations`, {
      params: {
        language: 'null',
        page: 1,
      },
    });
  }
}

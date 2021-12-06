import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '@core/services/base.service';
interface RequestData {
  filter: string | null;
  page: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BaseService<Movie, Movie> {
  constructor(http: HttpClient) {
    super(http, '/movie');
  }
  getMovies(requestData: RequestData) {
    const filter = requestData.filter ?? 'popular';
    return this.http.get(`${this.endpoint}/${filter}`, {
      params: { page: requestData.page },
    });
  }
}

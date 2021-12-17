import { Injectable } from '@angular/core';

export enum MOVIE_DB_IMAGE_URL {
  small = 'https://image.tmdb.org/t/p/w185',
  medium = 'https://image.tmdb.org/t/p/w300',
  large = 'https://image.tmdb.org/t/p/w1280',
  original = 'https://image.tmdb.org/t/p/original',
}

@Injectable({
  providedIn: 'root',
})
export class MovieImageService {
  getMovieImageOriginal(path: string) {
    return `${MOVIE_DB_IMAGE_URL.original}/${path}`;
  }

  getMovieImageLarge(path: string) {
    return `${MOVIE_DB_IMAGE_URL.large}/${path}`;
  }

  getMovieImageMedium(path: string) {
    return `${MOVIE_DB_IMAGE_URL.medium}/${path}`;
  }

  getMovieImageSmall(path: string) {
    return `${MOVIE_DB_IMAGE_URL.small}/${path}`;
  }
}

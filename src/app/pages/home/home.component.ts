import { Component, OnInit } from '@angular/core';
import { MovieService } from '@features/movie/services/movie.service';
import { Movie } from '@features/movie/interfaces/movie';

enum MOVIE_DB_IMAGE_URL {
  small = 'https://image.tmdb.org/t/p/w185',
  medium = 'https://image.tmdb.org/t/p/w300',
  large = 'https://image.tmdb.org/t/p/w1280',
  original = 'https://image.tmdb.org/t/p/original',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(protected movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovies({ filter: null, page: 1 })
      .subscribe((response) => {
        this.movies = response.results;
      });
  }

  getPosterMovie(poster_path: string) {
    return `${MOVIE_DB_IMAGE_URL.medium}/${poster_path}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '@features/movie/services/movie.service';
import { Movie } from '@features/movie/interfaces/movie';
import { MovieImageService } from '@features/movie/services/movie-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  page = 1;
  moviesPerPage = 20;
  totalMovies = 10000;

  constructor(
    protected movieService: MovieService,
    protected movieImageService: MovieImageService
  ) {}

  ngOnInit(): void {
    this.getMoviePerPage();
  }

  getPosterMovie(poster_path: string) {
    return this.movieImageService.getMovieImageMedium(poster_path);
  }

  getMoviePerPage(page = 1) {
    this.page = page;
    this.movieService
      .getMovies({ filter: null, page: this.page })
      .subscribe((response) => {
        this.movies = response.results;
      });
    window.scrollTo(0, 0);
  }
}

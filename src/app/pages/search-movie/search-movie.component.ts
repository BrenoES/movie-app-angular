import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@features/movie/interfaces/movie';
import { ResponseData } from '@features/movie/interfaces/request-data';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieService } from '@features/movie/services/movie.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  movies$!: Observable<ResponseData<Movie>>;
  term!: string;
  page = 1;
  moviesPerPage = 20;
  totalMovies!: number;

  constructor(
    protected movieService: MovieService,
    protected mFovieImageService: MovieImageService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.term = params.get('query') ?? '';
      this.getMoviePerPage();
    });
  }

  getPosterMovie(poster_path: string) {
    return this.mFovieImageService.getMovieImageMedium(poster_path);
  }

  getMoviePerPage(page = 1) {
    this.page = page;
    this.movies$ = this.movieService
      .searchMovies({
        query: this.term,
        page: this.page,
      })
      .pipe(tap((response) => (this.totalMovies = response.total_results)));
    window.scrollTo(0, 0);
  }
}

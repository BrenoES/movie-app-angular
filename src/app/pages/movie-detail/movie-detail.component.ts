import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from '@features/movie/interfaces/credits';
import { Movie } from '@features/movie/interfaces/movie';
import { Recommendation } from '@features/movie/interfaces/recommendation';
import { ResponseData } from '@features/movie/interfaces/request-data';
import { MovieService } from '@features/movie/services/movie.service';
import { Observable } from 'rxjs';
import { MOVIE_DB_IMAGE_URL } from '../home/home.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie$!: Observable<Movie>;
  actors$!: Observable<Credits>;
  recommendations$!: Observable<ResponseData<Recommendation>>;

  constructor(
    protected movieService: MovieService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = params.get('id') as string;
      this.movie$ = this.movieService.findById(movieId);
      this.actors$ = this.movieService.getActors(movieId);
      this.recommendations$ = this.movieService.getRecommendations(movieId);
    });
  }

  getBackdrop(backdrop: string) {
    return `${MOVIE_DB_IMAGE_URL.large}/${backdrop}`;
  }

  getPosterMovie(poster_path: string) {
    return `${MOVIE_DB_IMAGE_URL.medium}/${poster_path}`;
  }

  getImageActor(profile_path: string) {
    return `${MOVIE_DB_IMAGE_URL.small}/${profile_path}`;
  }
}

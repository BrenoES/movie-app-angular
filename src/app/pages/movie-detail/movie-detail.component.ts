import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@features/movie/interfaces/movie';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieService } from '@features/movie/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie$!: Observable<Movie>;

  constructor(
    protected movieService: MovieService,
    protected movieImageService: MovieImageService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = params.get('id') as string;
      this.movie$ = this.movieService.findById(movieId);
    });
  }

  getPosterMovie(path: string) {
    return this.movieImageService.getMovieImageSmall(path);
  }

  getBackdrop(path: string) {
    return this.movieImageService.getMovieImageLarge(path);
  }
}

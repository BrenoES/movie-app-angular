import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recommendation } from '@features/movie/interfaces/recommendation';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieService } from '@features/movie/services/movie.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-recommendation',
  templateUrl: './movie-recommendation.component.html',
  styleUrls: ['./movie-recommendation.component.scss'],
})
export class MovieRecommendationComponent implements OnInit {
  recommendations$!: Observable<Recommendation[]>;

  constructor(
    protected movieImageService: MovieImageService,
    protected movieService: MovieService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = params.get('id') as string;

      this.recommendations$ = this.movieService
        .getRecommendations(movieId)
        .pipe(map((respone) => respone.results));
    });
  }

  getPosterMovie(path: string) {
    return this.movieImageService.getMovieImageMedium(path);
  }
}

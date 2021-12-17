import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '@features/movie/interfaces/cast';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieService } from '@features/movie/services/movie.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss'],
})
export class MovieCastComponent implements OnInit {
  actors$!: Observable<Cast[]>;

  constructor(
    protected movieService: MovieService,
    protected movieImageService: MovieImageService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = params.get('id') as string;

      this.actors$ = this.movieService
        .getActors(movieId)
        .pipe(map((response) => response.cast));
    });
  }

  getImageActor(path: string) {
    return this.movieImageService.getMovieImageSmall(path);
  }
}

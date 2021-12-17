import { Component, OnInit } from '@angular/core';

import { UserService } from '@core/services/user.service';
import { Movie } from '@features/movie/interfaces/movie';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieWatchlistService } from '@features/movie/services/movie-watchlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  constructor(
    protected movieImageService: MovieImageService,
    protected movieWatchlistService: MovieWatchlistService,
    protected userService: UserService
  ) {}

  ngOnInit(): void {
    const user = this.userService.user;
    if (user) {
      this.movies$ = this.movieWatchlistService.getMovies(user.uid);
    }
  }

  getPosterMovie(path: string) {
    return this.movieImageService.getMovieImageMedium(path);
  }
}

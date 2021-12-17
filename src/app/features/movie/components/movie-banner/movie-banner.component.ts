import { Component, Input, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user.service';
import { Movie } from '@features/movie/interfaces/movie';
import { MovieImageService } from '@features/movie/services/movie-image.service';
import { MovieWatchlistService } from '@features/movie/services/movie-watchlist.service';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss'],
})
export class MovieBannerComponent implements OnInit {
  @Input() movie!: Movie;

  faBookmark = faBookmark;

  watchlist: DocumentData[] = [];

  constructor(
    protected movieImageService: MovieImageService,
    protected movieWatchlistService: MovieWatchlistService,
    public auth: AuthService,
    protected userService: UserService
  ) {}

  ngOnInit(): void {
    this.getMovieWatchlist();
  }

  getPosterMovie(path: string) {
    return this.movieImageService.getMovieImageLarge(path);
  }

  async addMovieWatchlist(movie: Movie) {
    const user = this.userService.user;
    if (user) {
      const userId = user.uid;
      const movieId = movie.id;
      await this.movieWatchlistService.addMovie({
        userId,
        movieId,
        value: movie,
      });
    }
  }

  getMovieWatchlist() {
    const user = this.userService.user;
    if (user) {
      const userId = user.uid;
      this.movieWatchlistService
        .getMovies(userId)
        .subscribe((response) => (this.watchlist = response));
    }
  }

  async removeMovieWatchlist(movie: Movie) {
    const user = this.userService.user;
    if (user) {
      const userId = user.uid;
      const movieId = movie.id;

      await this.movieWatchlistService.removeMovie({ userId, movieId });
    }
  }

  isInWatchlist(movieId: number) {
    return this.watchlist.some((movie) => movie['id'] === movieId);
  }
}

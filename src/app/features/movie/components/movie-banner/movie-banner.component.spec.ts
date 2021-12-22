import { MovieBannerComponent } from './movie-banner.component';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { RouterTestingModule } from '@angular/router/testing';

import { PipesModule } from '@core/pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LabelModule } from '@shared/label/label.module';
import { UserService } from '@core/services/user.service';
import { MovieWatchlistService } from '@features/movie/services/movie-watchlist.service';
import { AuthService } from '@core/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '@features/movie/interfaces/movie';

interface MovieMock {
  value: Movie;
}

interface ProvidersMovieBanner {
  User: { user: { uid: string } | null };
  Watchlist: WatchlistType;
  Auth: { isLoggedIn: jest.Mock };
}

const movieMock = {
  id: 634649,
  title: 'Spider-Man: No Way Home',
  budget: 200000000,
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
  ],
  release_date: '2021-12-15',
  runtime: 148,
  tagline: 'The Multiverse unleashed.',
  vote_average: 8.7,
  poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  overview:
    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
};

const Watchlist = {
  _whacthlist: new BehaviorSubject([] as Movie[]),

  addMovie: function (movie: MovieMock) {
    this._whacthlist.next([movie.value]);
  },

  removeMovie: function () {
    this._whacthlist.next([]);
  },

  getMovies: function () {
    return this._whacthlist;
  },
};

type WatchlistType = typeof Watchlist;

async function setup(movie: Movie, providers: ProvidersMovieBanner) {
  await render(MovieBannerComponent, {
    componentProperties: {
      movie,
    },
    imports: [RouterTestingModule, PipesModule, FontAwesomeModule, LabelModule],
    componentProviders: [
      { provide: MovieWatchlistService, useValue: providers.Watchlist },
      { provide: UserService, useValue: providers.User },
      { provide: AuthService, useValue: providers.Auth },
    ],
  });
}

describe('MovieBannerComponent', () => {
  it('should render MovieBanner', async () => {
    await setup(movieMock as Movie, {
      Watchlist,
      User: { user: null },
      Auth: { isLoggedIn: jest.fn().mockReturnValue(false) },
    });
    screen.getByTestId(/movie-banner/i);
    screen.getByText(/Spider-Man: No Way Home/i);
  });

  it('should add and remove movie from watchlist when click in the button', async () => {
    //Cenário
    await setup(movieMock as Movie, {
      Watchlist,
      Auth: { isLoggedIn: jest.fn().mockReturnValue(true) },
      User: { user: { uid: 'foo' } },
    });

    //Acão
    const buttonAdd = await screen.findByRole('button', {
      name: /Add to my Watchlist/i,
    });
    userEvent.click(buttonAdd);

    const buttonRemove = await screen.findByRole('button', {
      name: /Remove from my Watchlist/i,
    });
    userEvent.click(buttonRemove);

    const buttonAddMovie = screen.queryByRole('button', {
      name: /Add to my Watchlist/i,
    });

    //Expectativa

    expect(buttonAddMovie).toBeInTheDocument();
  });
});

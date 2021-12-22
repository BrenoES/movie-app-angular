import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '@features/movie/services/movie.service';
import { CardModule } from '@shared/card/card.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';

import { MovieRecommendationComponent } from './movie-recommendation.component';

const expectedRecommendations = {
  results: [
    {
      adult: false,
      backdrop_path: '/r4VQbiydjDH7ULo1HWjkkrNt3da.jpg',
      genre_ids: [10749, 18, 80, 10402],
      id: 511809,
      media_type: 'movie',
      title: 'West Side Story',
      original_language: 'en',
      original_title: 'West Side Story',
      overview:
        'Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.',
      popularity: 65.444,
      poster_path: '/zeAZTPxV5xZRNEX3rZotnsp7IVo.jpg',
      release_date: '2021-12-08',
      video: false,
      vote_average: 7.602,
      vote_count: 123,
    },
    {
      adult: false,
      backdrop_path: '/nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
      genre_ids: [18, 35, 878],
      id: 646380,
      media_type: 'movie',
      title: "Don't Look Up",
      original_language: 'en',
      original_title: "Don't Look Up",
      overview:
        'Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh.',
      popularity: 90.074,
      poster_path: '/5SkzM3TPpt72FoO46NSjipNXkNG.jpg',
      release_date: '2021-12-07',
      video: false,
      vote_average: 8,
      vote_count: 64,
    },
  ],
};

const MovieServiceMock = {
  getRecommendations: jest.fn().mockReturnValue(of(expectedRecommendations)),
};

async function setup() {
  await render(MovieRecommendationComponent, {
    imports: [RouterTestingModule, CardModule, LayoutModule],
    componentProviders: [{ provide: MovieService, useValue: MovieServiceMock }],
  });
}

describe('MovieRecommendationComponent', () => {
  it('should render all recommendations when starting component', async () => {
    //Cenário
    await setup();
    const toFixed = (number: number) => Math.round(number * 10) / 10;

    //Ação
    const listRecommendations = await screen.findAllByTestId(
      'card-recommendation'
    );
    //Expectativa
    expect(listRecommendations).toHaveLength(
      expectedRecommendations.results.length
    );

    expectedRecommendations.results.forEach((recommendation) => {
      expect(document.getElementById(`${recommendation.id}`)).toHaveAttribute(
        'href',
        `/movie/${recommendation.id}`
      );
      screen.getByText(
        new RegExp(`${toFixed(recommendation.vote_average)}`, 'i')
      );
      screen.getByAltText(new RegExp(`${recommendation.poster_path}`, 'i'));
    });
  });
});

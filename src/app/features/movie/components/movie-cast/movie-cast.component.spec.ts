import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '@features/movie/services/movie.service';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';

import { MovieCastComponent } from './movie-cast.component';
const expectedActors = [
  {
    adult: false,
    gender: 2,
    id: 1136406,
    known_for_department: 'Acting',
    name: 'Tom Holland',
    original_name: 'Tom Holland',
    popularity: 160.712,
    profile_path: '/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg',
    cast_id: 1,
    character: 'Peter Parker / Spider-Man',
    credit_id: '5d8e28d38289a0000fcc32f9',
    order: 0,
  },
  {
    adult: false,
    gender: 1,
    id: 505710,
    known_for_department: 'Acting',
    name: 'Zendaya',
    original_name: 'Zendaya',
    popularity: 60.98,
    profile_path: '/jHWlWOasiqKS8JI40g9GDH5X6AL.jpg',
    cast_id: 54,
    character: "Michelle 'MJ' Jones",
    credit_id: '5fd968c09408ec003cdd0557',
    order: 1,
  },
];

const movieServiceMock = {
  getActors: jest.fn().mockReturnValue(of({ cast: expectedActors })),
};

async function setup() {
  await render(MovieCastComponent, {
    imports: [RouterTestingModule],
    componentProviders: [{ provide: MovieService, useValue: movieServiceMock }],
  });
}

describe('MovieCastComponent', () => {
  it('shold be render all actors', async () => {
    //Cenário
    await setup();

    //Ação
    const listActors = screen.getAllByRole('listitem');

    //Expectativa
    expect(listActors).toHaveLength(expectedActors.length);
    expectedActors.forEach((actor) => {
      screen.getByAltText(new RegExp(actor.character, 'i'));
      screen.getByText(new RegExp(actor.original_name, 'i'));
      screen.getByText(new RegExp(actor.character, 'i'));
    });
  });
});

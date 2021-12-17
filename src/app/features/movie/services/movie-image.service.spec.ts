import { TestBed } from '@angular/core/testing';

import { MovieImageService } from './movie-image.service';

describe('MovieImageService', () => {
  let service: MovieImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

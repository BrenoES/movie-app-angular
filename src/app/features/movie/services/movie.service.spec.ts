import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environment/environment';

import { MovieService } from './movie.service';

describe(MovieService.name, () => {
  let service: MovieService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get movies popular', (done) => {
    const testData = {};
    const request = {
      filter: null,
      page: 1,
    };
    service.getMovies(request).subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });

    const req = httpTestingController.expectOne(
      `${environment.API_URL}/movie/popular?page=1`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
});

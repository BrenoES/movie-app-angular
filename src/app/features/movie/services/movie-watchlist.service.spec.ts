import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToasterService } from '@core/services/toaster.service';
import { ToastrServiceStub } from '@tests/stubs';

import { MovieWatchlistService } from './movie-watchlist.service';

describe('MovieWatchlistService', () => {
  let service: MovieWatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: {} },
        { provide: ToasterService, useValue: ToastrServiceStub },
      ],
    });
    service = TestBed.inject(MovieWatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

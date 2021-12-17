import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentData,
} from '@angular/fire/compat/firestore';
import { tap, map } from 'rxjs';
import { LoaderService } from '@core/services/loader.service';
import { RequestWatchList } from '@features/movie/interfaces/watchlist';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieWatchlistService {
  constructor(
    protected afs: AngularFirestore,
    protected loader: LoaderService
  ) {}

  getMovies(userId: string) {
    this.loader.show();
    const WatchListRef = this.afs
      .collection(`watchlist`)
      .doc(userId)
      .collection('movies');

    return WatchListRef.valueChanges().pipe(
      tap(() => this.loader.hide()),
      map((response) => response as Movie[])
    );
  }

  addMovie(data: RequestWatchList) {
    const WatchListRef = this.afs
      .collection('watchlist')
      .doc(`/${data.userId}`)
      .collection('movies')
      .doc(`${data.movieId}`);

    return WatchListRef.set(data.value as DocumentData);
  }

  removeMovie(data: RequestWatchList) {
    const WatchListRef: AngularFirestoreDocument<unknown> = this.afs
      .collection(`watchlist`)
      .doc(data.userId)
      .collection('movies')
      .doc(`${data.movieId}`);

    return WatchListRef.delete();
  }
}

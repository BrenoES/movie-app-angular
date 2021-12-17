import { DocumentData } from '@angular/fire/compat/firestore';

export interface RequestWatchList {
  userId: string;
  movieId: number;
  value?: DocumentData;
}

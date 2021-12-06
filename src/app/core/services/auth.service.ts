import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getApiKey() {
    return environment.MOVIE_API_KEY;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(protected route: Router) {}

  async searchMovie(term: string) {
    try {
      if (!term) {
        await this.route.navigate(['/']);
      } else {
        await this.route.navigate(['search'], { queryParams: { query: term } });
      }
    } catch (e) {
      console.error(e);
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  async searchMovie(term: string) {
    try {
      if (!term) {
        await this.router.navigate(['/']);
      } else {
        await this.router.navigate(['search'], {
          queryParams: { query: term },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
}

import { Component } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-app-angular';
  env = environment;
}

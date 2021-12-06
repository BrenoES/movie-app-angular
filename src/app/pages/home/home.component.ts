import { Component, OnInit } from '@angular/core';
import { MovieService } from '@features/movie/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(protected movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies({ filter: null, page: 1 }).subscribe((data) => {
      console.log(data);
    });
  }
}

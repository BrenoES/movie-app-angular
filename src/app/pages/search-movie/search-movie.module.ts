import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';

@NgModule({
  declarations: [SearchMovieComponent],
  imports: [CommonModule, SearchMovieRoutingModule, NgxPaginationModule],
})
export class SearchMovieModule {}

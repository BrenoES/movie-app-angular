import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';
import { CardModule } from '@shared/card/card.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { MovieModule } from '@features/movie/movie.module';

@NgModule({
  declarations: [SearchMovieComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,

    MovieModule,
    SearchMovieRoutingModule,
    CardModule,
    LayoutModule,
  ],
})
export class SearchMovieModule {}

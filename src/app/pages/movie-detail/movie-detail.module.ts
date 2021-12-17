import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

import { CardModule } from '@shared/card/card.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { MovieModule } from '@features/movie/movie.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieModule,
    MovieDetailRoutingModule,
    CardModule,
    LayoutModule,
  ],
})
export class MovieDetailModule {}

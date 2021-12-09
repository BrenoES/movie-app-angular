import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { PipesModule } from '@core/pipes/pipes.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, MovieDetailRoutingModule, PipesModule],
})
export class MovieDetailModule {}

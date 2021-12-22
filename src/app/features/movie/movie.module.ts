import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { MovieRecommendationComponent } from './components/movie-recommendation/movie-recommendation.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { CardModule } from '@shared/card/card.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LabelModule } from '@shared/label/label.module';

@NgModule({
  declarations: [
    MovieBannerComponent,
    MovieCastComponent,
    MovieRecommendationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    PipesModule,
    LayoutModule,
    CardModule,
    LabelModule,
  ],
  exports: [
    MovieBannerComponent,
    MovieCastComponent,
    MovieRecommendationComponent,
  ],
})
export class MovieModule {}

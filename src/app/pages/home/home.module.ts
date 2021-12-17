import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from '@shared/card/card.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { MovieModule } from '@features/movie/movie.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MovieModule,
    HomeRoutingModule,
    NgxPaginationModule,
    CardModule,
    LayoutModule,
  ],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistComponent } from './watchlist.component';
import { CardModule } from '@shared/card/card.module';
import { LayoutModule } from '@shared/layout/layout.module';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule, WatchlistRoutingModule, CardModule, LayoutModule],
})
export class WatchlistModule {}

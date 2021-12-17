import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from '@core/guards/can-activate-route.guard';
import { WatchlistComponent } from './watchlist.component';

const routes: Routes = [
  {
    path: '',
    component: WatchlistComponent,
    canActivate: [CanActivateRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchlistRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./pages/not-found/not-found.module').then(
  //       (m) => m.NotFoundPageModule
  //     ),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

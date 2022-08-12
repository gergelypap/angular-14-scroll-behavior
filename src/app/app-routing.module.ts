import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      // See: https://angular.io/api/router/ExtraOptions#scrollPositionRestoration
      scrollPositionRestoration: 'enabled',
      // See: https://angular.io/api/router/ExtraOptions#anchorScrolling
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

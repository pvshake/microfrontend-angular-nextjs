import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent), // Lazy loading!!!
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
    // component: PageNotFoundComponent, // eager loading para a page 404
  },
];

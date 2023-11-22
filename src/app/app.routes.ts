import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: $localize`:Homepage title for SEO@@homePageSEOTitle:Homepage`,
        loadComponent: () => import('./pages/home'),
      },
      {
        path: 'about',
        title: $localize`:About page title for SEO@@aboutPageSEOTitle:About`,
        loadComponent: () => import('./pages/about'),
      },
    ],
  },
];

import { RouteMetadataKey, RouteWithMetadata } from './domain';

export const routes: RouteWithMetadata[] = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: $localize`:@@SEO.homePage.title:Homepage`,
        loadComponent: () => import('./pages/home'),
        [RouteMetadataKey]: () => ({
          tags: [
            {
              name: 'description',
              content: $localize`:@@SEO.homePage.description:Homepage meta description`,
            }
          ]
        }),
      },
      {
        path: 'about',
        title: $localize`:@@SEO.aboutPage.title:About`,
        loadComponent: () => import('./pages/about'),
        [RouteMetadataKey]: () => ({
          tags: [
            {
              name: 'description',
              content: $localize`:@@SEO.aboutPage.description:About page meta description`,
            }
          ]
        }),
      },
    ],
  },
];

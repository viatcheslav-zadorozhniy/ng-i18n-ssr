import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PageMetadataService, PageTitleStrategy } from './services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: () => {
        const pageMetadataService = inject(PageMetadataService);
        return () => pageMetadataService.init();
      },
    },
  ],
};

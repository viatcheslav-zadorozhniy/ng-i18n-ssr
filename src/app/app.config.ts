import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PageTitleStrategy } from './services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
};

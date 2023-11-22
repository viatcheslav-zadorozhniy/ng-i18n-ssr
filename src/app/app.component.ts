import { PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, Component, LOCALE_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Locale } from './locale';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class AppComponent {
  readonly currentLocaleId = inject(LOCALE_ID);

  readonly locales: { id: Locale; label: string }[] = [
    { id: 'en', label: 'English' },
    { id: 'he', label: 'עברית' },
    { id: 'uk', label: 'Українська' },
  ];

  #platformLocation = inject(PlatformLocation);

  handleLocaleChange(localeId: Locale): void {
    const baseHref = this.#platformLocation.getBaseHrefFromDOM();
    location.href = location.href.replace(baseHref, `/${localeId}/`);
  }
}

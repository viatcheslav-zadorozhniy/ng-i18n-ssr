import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User } from '../../domain';
import { FeedbackFormComponent, UserRoleI18nPipe, UserStatusI18nPipe } from '../../shared';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeedbackFormComponent, UserRoleI18nPipe, UserStatusI18nPipe],
})
export class AboutComponent {
  readonly user: User = {
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'female',
  };
}

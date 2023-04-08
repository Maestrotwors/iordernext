import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AuthService } from '@app/frontend/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async logInTest() {
    const response = await this.auth.logIn('test', 'test');
    if (response === 'PublicUser') {
      this.router.navigate(['member-user/suppliers']);
    }
  }
}

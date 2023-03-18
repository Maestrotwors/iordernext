import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '@base/apps/frontend/host/src/app/services/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async logInTest() {
    const response = await this.auth.logIn('test', 'test');
    console.log(response);
    if (response === 'PublicUser') {
      this.router.navigate(['member-user/suppliers']);
    }
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '@app-services/auth/auth.service';

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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '@frontend/services/core';

@Component({
  selector: 'iordernext-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  constructor(private auth: AuthService, private router: Router) {}
  async logInTest() {
    const response = await this.auth.logIn('test', 'test');

  }
}

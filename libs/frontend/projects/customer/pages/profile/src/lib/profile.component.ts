import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ProfileMenuComponent, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}

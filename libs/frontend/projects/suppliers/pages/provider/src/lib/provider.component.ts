import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderComponent {

}

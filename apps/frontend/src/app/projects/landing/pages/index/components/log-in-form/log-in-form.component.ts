import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent {

}

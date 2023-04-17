import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewsComponent {

}

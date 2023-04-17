import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-add-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-add-modal.component.html',
  styleUrls: ['./recommended-add-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedAddModalComponent {

}

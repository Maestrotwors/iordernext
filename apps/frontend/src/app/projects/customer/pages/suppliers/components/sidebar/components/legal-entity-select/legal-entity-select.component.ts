import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-entity-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-entity-select.component.html',
  styleUrls: ['./legal-entity-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalEntitySelectComponent {

}

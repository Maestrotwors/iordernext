import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contract-emblem-big',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-emblem-big.component.html',
  styleUrls: ['./contract-emblem-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractEmblemBigComponent {
  @Input() src = '';
}

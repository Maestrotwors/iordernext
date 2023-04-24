import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contract-emblem-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-emblem-small.component.html',
  styleUrls: ['./contract-emblem-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractEmblemSmallComponent {}

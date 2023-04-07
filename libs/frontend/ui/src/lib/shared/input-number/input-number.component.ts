import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [NzInputNumberModule],
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent {}

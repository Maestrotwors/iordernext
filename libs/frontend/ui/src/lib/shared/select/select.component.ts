import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, NzSelectModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() caption = '';
  @Input() width = '';
  @Input() data:any = [];

  identify(index: number, item: any) {
    return item.id;
  }
}

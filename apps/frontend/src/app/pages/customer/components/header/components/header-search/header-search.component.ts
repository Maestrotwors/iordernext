import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [CommonModule, NzInputModule],
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent {}

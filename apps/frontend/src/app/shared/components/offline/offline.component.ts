import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzResultModule } from 'ng-zorro-antd/result';
@Component({
  selector: 'app-offline',
  standalone: true,
  imports: [CommonModule, NzResultModule],
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfflineComponent {}

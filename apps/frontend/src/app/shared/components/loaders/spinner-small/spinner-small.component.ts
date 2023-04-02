import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spinner-small',
  templateUrl: './spinner-small.component.html',
  styleUrls: ['./spinner-small.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerSmallComponent{}

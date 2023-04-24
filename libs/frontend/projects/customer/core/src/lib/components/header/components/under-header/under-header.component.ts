import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-under-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './under-header.component.html',
  styleUrls: ['./under-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnderHeaderComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdaptiveService } from '@libs/adaptive/src/lib/frontend-core-adaptive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public adaptive: AdaptiveService) {}

  onResize(event: any) {
    this.adaptive.resize(event.target.innerWidth);
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { LazyInject } from './services/core/lazy-inject/lazy-inject.service';
import { StoreService } from './services/core/store/store/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private lazyInjector: LazyInject, storeService: StoreService) {
    this.initOfflineService();
  }

  public offlineService: any;

  async initOfflineService() {
    this.offlineService = await this.lazyInjector.get(() =>
      import('./services/core/offline/offline.service').then(
        (s) => s.OfflineService
      )
    );
  }

  onResize(event: any) {
    //this.adaptive.resize(event.target.innerWidth);
  }
}

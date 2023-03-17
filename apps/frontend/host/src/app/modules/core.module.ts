import { ModuleWithProviders, NgModule } from '@angular/core';

import { AdaptiveService } from '@libs/frontend/core/adaptive/src/lib/frontend-core-adaptive.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppCoreModule {
  static forRoot(): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [AdaptiveService],
    };
  }
}

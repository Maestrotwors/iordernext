import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { StoreService } from '../services/core/store/store/store.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppCoreModule {
  static forRoot(): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [StoreService],
    };
  }
}

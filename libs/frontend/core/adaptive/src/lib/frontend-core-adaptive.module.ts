import { AdaptiveService } from './frontend-core-adaptive.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, AdaptiveService],
  exports: [AdaptiveService],
})
export class FrontendCoreAdaptiveModule {}

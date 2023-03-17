import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, LandingRoutingModule],
  declarations: [LandingComponent],
})
export class LandingModule {}

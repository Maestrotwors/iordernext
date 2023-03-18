import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [CommonModule, LandingRoutingModule, HttpClientModule],
  declarations: [LandingComponent],
})
export class LandingModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    HttpClientModule,
    LogInFormComponent,
  ],
  declarations: [LandingComponent]
})
export class LandingModule {}

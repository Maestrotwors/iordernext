import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LandingComponent],
})
export class LandingModule {}

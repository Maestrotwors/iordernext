import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }

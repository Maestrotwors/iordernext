import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [CustomerComponent],
})
export class CustomerModule {}

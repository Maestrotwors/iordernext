import { OfflineComponent } from './../../shared/components/offline/offline.component';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterComponent,
    HeaderComponent,
    OfflineComponent
  ],
  declarations: [CustomerComponent],
})
export class CustomerModule {}

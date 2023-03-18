import { AppComponent } from './app.component';
import { AppCoreModule } from './modules/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IsCustomerGuard } from './guards/customer.guard';
import { IsSupplierGuard } from './guards/supplier.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    AppCoreModule.forRoot(),
  ],
  providers: [IsCustomerGuard, IsSupplierGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

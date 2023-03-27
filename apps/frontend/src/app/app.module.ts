import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppCoreModule } from './modules/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPreloadingStrategyService } from '@app-services/preloading-strategy/preloading-strategy.service';
import { Interceptor } from './interceptors/interceptor';
import { IsCustomerGuard } from './guards/customer.guard';
import { IsSupplierGuard } from './guards/supplier.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { OfflineComponent } from './shared/components/offline/offline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_DATE_CONFIG, NZ_I18N, uk_UA } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: CustomPreloadingStrategyService,
    }),
    HttpClientModule,
    AppCoreModule.forRoot(),
    BrowserAnimationsModule,
    OfflineComponent,
  ],
  providers: [
    IsCustomerGuard,
    IsSupplierGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: uk_UA },
    { provide: NZ_DATE_CONFIG, useValue: { firstDayOfWeek: 1 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


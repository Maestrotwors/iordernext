import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NZ_DATE_CONFIG, NZ_I18N, uk_UA } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: uk_UA },
    { provide: NZ_DATE_CONFIG, useValue: { firstDayOfWeek: 1 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

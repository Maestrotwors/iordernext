import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';
import { LOCAL_STORAGE_TOKEN } from '@iorder/frontend/core/tokens';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'top',
    }),
    HttpCacheInterceptorModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    /*{
      provide: LOCAL_STORAGE_TOKEN,
      useFactory: () => {
        const a = true;
        if (a) {
          return localStorage;
        }
        return localStorage;
      },
      deps: []
    },*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

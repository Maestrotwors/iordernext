import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { backendConstants } from '@fe-constants/backend';
import { catchError } from 'rxjs/internal/operators/catchError';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs/internal/observable/of';
import { repeat } from 'rxjs';
import { retry } from 'rxjs/internal/operators/retry';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}
  hostUrl = backendConstants.host + ':' + backendConstants.port + '/api/';
  iAmWaitingForNewToken = new BehaviorSubject(false);

  get$(url: string) {
    return this.http.get(this.hostUrl + url).pipe(this.checkPipe.bind(this));
  }

  post$(url: string, body: object) {
    return this.http
      .post(this.hostUrl + url, body)
      .pipe(this.checkPipe.bind(this));
  }

  getWithToken$(url: string) {
    return this.http
      .get(this.hostUrl + url, this.processOptionsWithToken())
      .pipe(this.checkPipe.bind(this), this.retryPipe);
  }

  postWithToken$(url: string, body: object) {
    return this.http
      .post(this.hostUrl + url, this.processOptionsWithToken(body))
      .pipe(this.checkPipe.bind(this), this.retryPipe);
  }

  // putWithToken() {}

  // deleteWithToken() {}

  async get(url: string) {
    return await lastValueFrom(this.get$(url));
  }

  async post(url: string, body: object) {
    return await lastValueFrom(this.post$(url, body));
  }

  async getWithToken(url: string) {
    return await lastValueFrom(this.getWithToken$(url));
  }

  async postWithToken(url: string, body: object) {
    return await lastValueFrom(this.postWithToken$(url, body));
  }

  private checkPipe<T>(source: Observable<T>) {
    return source.pipe(
      map((data) => {
        console.log(data);
        return {
          data: data,
          hasError: false,
        };
      }),
      catchError(async (err) => {
        if (err.status === 401) {
          await this.refreshTokens();
          return throwError(()=> new Error('errr'));
        } else {
          return of({ data: err.error, hasError: true, status: err.status });
        }
      }),
      //retry({ count: 1, resetOnSuccess: true})
    );
  }

  private retryPipe<T>(source: Observable<T>) {
    return source.pipe(
      map((data) => {
        console.log(data);
        return data;
      }),
      catchError((err) => {
        console.log(err);
        return of({ data: err.error, hasError: true, status: err.status });
      })
    );
  }

  private async refreshToken() {
    const response = this.post('auth/refresh-token', {
      refresh_token: this.getRefreshToken(),
    });
    console.log(response);
  }

  private getAccessToken() {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  private processOptionsWithToken(options: object = {}) {
    const auth = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.getAccessToken()}`
      ),
    };
    return {
      ...options,
      ...auth,
    };
  }

  private async refreshTokens() {
    return new Promise((resolve) => {
      this.iAmWaitingForNewToken.next(true);
      fetch(this.hostUrl + 'auth/refresh-token', {
        method: 'POST',
        body: JSON.stringify({
          refreshToken: this.getRefreshToken(),
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
        .then(async (response: any) => {
          const resp = await response.json();
          localStorage.setItem('access_token', resp?.['access_token']);
          localStorage.setItem('refresh_token', resp?.['refresh_token']);
          this.iAmWaitingForNewToken.next(true);
          resolve(true);
        })
        .catch(() => {
          this.iAmWaitingForNewToken.next(true);
          resolve(false);
        })
    });
  }
}

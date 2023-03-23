import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { backendConstants } from '@fe-constants/backend';
import { catchError } from 'rxjs/internal/operators/catchError';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}
  hostUrl = backendConstants.host + ':' + backendConstants.port + '/api/';
  iAmWaitingForNewToken = new BehaviorSubject(false);

  get$(url: string) {
    return this.http.get(this.hostUrl + url).pipe(this.checkPipe);
  }

  post$(url: string, body: object) {
    return this.http.post(this.hostUrl + url, body).pipe(this.checkPipe);
  }

  getWithToken$(url: string) {
    return this.http
      .get(this.hostUrl + url, this.processOptionsWithToken())
      .pipe(this.checkPipe);
  }

  postWithToken$(url: string, body: object) {
    return this.http
      .post(this.hostUrl + url, this.processOptionsWithToken(body))
      .pipe(this.checkPipe);
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

  async refreshTokens() {
    this.iAmWaitingForNewToken.next(true);
    const response: any = await this.post('auth/refresh-token', {
      refreshToken: this.getRefreshToken(),
    });
    console.log(response);
    localStorage.setItem('access_token', response['data']?.['access_token']);
    localStorage.setItem('refresh_token', response['data']?.['refresh_token']);
    this.iAmWaitingForNewToken.next(false);
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
        return of({ data: err.error, hasError: true, status: err.status });
      })
    );
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
}

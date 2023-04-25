import { Observable } from 'rxjs//internal/Observable';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {
  HttpResponseError,
  HttpResponseData,
} from '@frontend/core/models/http';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { take } from 'rxjs/internal/operators/take';
import { HttpBaseService } from './http-base.service';
import { withCache } from '@ngneat/cashew';
@Injectable({ providedIn: 'root' })
export class HttpService extends HttpBaseService {
  constructor(private http: HttpClient) {
    super();
  }
  // Observable Http //

  get$<T>(
    url: string,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .get(this.hostUrl + url, { params: query, context: withCache() })
      .pipe(take(1), (source: Observable<any>) => this.check<T>(source));
  }

  post$<T>(
    url: string,
    body: object,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .post(this.hostUrl + url, body, { params: query })
      .pipe(take(1), (source: Observable<any>) => this.check(source));
  }

  put$<T>(
    url: string,
    body: object,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .put(this.hostUrl + url, body, { params: query })
      .pipe(take(1), (source: Observable<any>) => this.check(source));
  }

  delete$<T>(
    url: string,
    body: object,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .delete(this.hostUrl + url, { params: query })
      .pipe(take(1), (source: Observable<any>) => this.check(source));
  }

  // Promise Http  //

  async get<T>(
    url: string,
    query: object = {}
  ): Promise<HttpResponseError | HttpResponseData<T>> {
    return await lastValueFrom(this.get$(url, query));
  }

  async post<T>(
    url: string,
    body: object,
    query: object = {}
  ): Promise<HttpResponseError | HttpResponseData<T>> {
    return await lastValueFrom(this.post$(url, body, query));
  }
}

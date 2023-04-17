import { Observable } from 'rxjs//internal/Observable';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { HttpResponseError, HttpResponseData } from '@frontend/models/core';
import { HttpServiceBase } from './http.base';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase {
  constructor(private http: HttpClient) {
    super();
  }
  // Observable Http //

  get$<T>(
    url: string,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .get(this.hostUrl + url, { params: query })
      .pipe((source: Observable<any>) => this.check<T>(source));
  }

  post$<T>(
    url: string,
    body: object,
    query = {}
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return this.http
      .post(this.hostUrl + url, body, { params: query })
      .pipe((source: Observable<any>) => this.check(source));
  }


  // Promise Http  //

  async post<T>(
    url: string,
    body: object,
    query: object = {}
  ): Promise<HttpResponseError | HttpResponseData<T>> {
    return await lastValueFrom(this.post$(url, body, query));
  }
}

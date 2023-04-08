import { Observable } from 'rxjs//internal/Observable';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { HttpServiceBase } from './http.base';
import { IHttpResponse } from '@app/frontend/models';
import { TokenService } from '@app/frontend/services';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase {
  constructor(private http: HttpClient, tokenService: TokenService) {
    super(tokenService);
  }
  // Observable Http //

  get$(url: string, query: object = {}): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .get(this.hostUrl + url + queryString)
      .pipe((source) => this.checkPipeWithoutToken(source));
  }

  post$(
    url: string,
    body: object,
    query: object = {}
  ): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .post(this.hostUrl + url + queryString, body)
      .pipe((source) => this.checkPipeWithoutToken(source));
  }

  getWithToken$(url: string, query: object = {}): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .get(this.hostUrl + url + queryString, this.processOptionsWithToken())
      .pipe((source) => this.checkPipeWithToken(source));
  }

  postWithToken$(
    url: string,
    body: object,
    query: object = {}
  ): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .post(
        this.hostUrl + url + queryString,
        this.processOptionsWithToken(body)
      )
      .pipe((source) => this.checkPipeWithToken(source));
  }

  putWithToken$(
    url: string,
    body: object,
    query: object = {}
  ): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .get(this.hostUrl + url + queryString, this.processOptionsWithToken(body))
      .pipe((source) => this.checkPipeWithToken(source));
  }

  deleteWithToken$(
    url: string,
    body: object,
    query: object = {}
  ): Observable<IHttpResponse> {
    const queryString = this.generateQueryString(query);
    return this.http
      .delete(
        this.hostUrl + url + queryString,
        this.processOptionsWithToken(body)
      )
      .pipe((source) => this.checkPipeWithToken(source));
  }

  // Promise Http //

  async get(url: string, query: object = {}): Promise<IHttpResponse> {
    return await lastValueFrom(this.get$(url, query));
  }

  async post(
    url: string,
    body: object,
    query: object = {}
  ): Promise<IHttpResponse> {
    return await lastValueFrom(this.post$(url, body, query));
  }

  async getWithToken(url: string, query: object = {}): Promise<IHttpResponse> {
    return await lastValueFrom(this.getWithToken$(url, query));
  }

  async postWithToken(
    url: string,
    body: object,
    query: object = {}
  ): Promise<IHttpResponse> {
    return await lastValueFrom(this.postWithToken$(url, body, query));
  }

  async putWithToken(
    url: string,
    body: object,
    query: object = {}
  ): Promise<IHttpResponse> {
    return await lastValueFrom(this.putWithToken$(url, body, query));
  }

  async deleteWithToken(
    url: string,
    body: object,
    query: object = {}
  ): Promise<IHttpResponse> {
    return await lastValueFrom(this.deleteWithToken$(url, body, query));
  }
}

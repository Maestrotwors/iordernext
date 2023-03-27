import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { HttpServiceBase } from './http.base';
import { TokenService } from '@app-services/token/token.service';

@Injectable({ providedIn: 'root' })
export class HttpService extends HttpServiceBase {
  constructor(private http: HttpClient, tokenService: TokenService) {
    super(tokenService);
  }
  // Observable Http //

  get$(url: string) {
    return this.http
      .get(this.hostUrl + url)
      .pipe((source) => this.checkPipeWithoutToken(source));
  }

  post$(url: string, body: object) {
    return this.http
      .post(this.hostUrl + url, body)
      .pipe((source) => this.checkPipeWithoutToken(source));
  }

  getWithToken$(url: string) {
    return this.http
      .get(this.hostUrl + url, this.processOptionsWithToken())
      .pipe((source) => this.checkPipeWithToken(source));
  }

  postWithToken$(url: string, body: object) {
    return this.http
      .post(this.hostUrl + url, this.processOptionsWithToken(body))
      .pipe((source) => this.checkPipeWithToken(source));
  }

  putWithToken$(url: string, body: object) {
    return this.http
      .get(this.hostUrl + url, this.processOptionsWithToken(body))
      .pipe((source) => this.checkPipeWithToken(source));
  }

  deleteWithToken$(url: string, body: object) {
    return this.http
      .delete(this.hostUrl + url, this.processOptionsWithToken(body))
      .pipe((source) => this.checkPipeWithToken(source));
  }

  // Promise Http //

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

  async putWithToken(url: string, body: object) {
    return await lastValueFrom(this.putWithToken$(url, body));
  }

  async deleteWithToken(url: string, body: object) {
    return await lastValueFrom(this.deleteWithToken$(url, body));
  }
}

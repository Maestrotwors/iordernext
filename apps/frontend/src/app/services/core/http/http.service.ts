import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { backendConstants } from '@fe-constants/backend';
import { catchError } from 'rxjs/internal/operators/catchError';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs/internal/observable/of';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}
  hostUrl = backendConstants.host + ':' + backendConstants.port + '/api/';
  // authToken: any = `Bearer ${sessionStorage.getItem('jwtToken')}`;
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };*/

  get$(url: string) {
    return this.http.get(this.hostUrl + url).pipe(this.checkPipe);
  }

  post$(url: string, body: object) {
    return this.http.post(this.hostUrl + url, body).pipe(this.checkPipe);
  }

  getWithToken$(url: string) {
    return this.http.get(this.hostUrl + url).pipe(this.checkPipe);
  }

  postWithToken$(url: string, body: object) {
    return this.http.post(this.hostUrl + url, body).pipe(this.checkPipe);
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
    return (source.pipe(
      map((data) => {
        console.log(data);
        return {
          data: data,
          hasError: false,
        };
      }),
      catchError((err) => {
        return of({ data: err.error, hasError: true, status: err.status });
      })
    ));
  }
}

import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import {
  HttpResponseError,
  HttpResponseData,
} from '@frontend/core/models/http';
import { API } from '../../constants/http';

export class HttpBaseService {
  protected hostUrl = API.protocol + API.host + ':' + API.port + '/api/';

  check<T>(
    source: Observable<T>
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    return source.pipe(
      map((data) => {
        return {
          data: <T>data,
          hasError: false,
        };
      }),
      catchError(async (err) => {
        return { error: err, hasError: true };
      })
    );
  }
}

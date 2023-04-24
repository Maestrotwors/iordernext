export class HttpResponseData<T> {
  data!: T;
  hasError = false;
}

export class HttpResponseError {
  error!: object[] | object | string;
  hasError = true;
}

export function isHttpResponseData<T>(value: HttpResponseData<T> | HttpResponseError): value is HttpResponseData<T> {
  return value.hasError === false;
}

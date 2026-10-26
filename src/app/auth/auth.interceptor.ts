import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  // Never send the token to external URLs or authentication forms.
  const protectedApi = request.url.startsWith('/api/') &&
    !/^\/api\/auth\/(login|register)(?:[/?]|$)/i.test(request.url);
  const auth = inject(AuthService);
  const token = auth.token();
  const outgoing = protectedApi && token
    ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : request;

  return next(outgoing).pipe(catchError(error => {
    if (protectedApi && error.status === 401) auth.logout();
    return throwError(() => error);
  }));
};

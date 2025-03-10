import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes('auth'))
    req.headers.append('Authorization', `Bearer ${sessionStorage.getItem("token")}`);

  return next(req);
};

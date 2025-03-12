import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes("auth")) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${sessionStorage.getItem("token")}`)
    });
    return next(modifiedReq);
  }
  return next(req);
};

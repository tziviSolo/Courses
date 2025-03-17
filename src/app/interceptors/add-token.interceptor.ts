import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes("auth")) {
    const user = JSON.parse(sessionStorage.getItem("user") ?? "");
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${user.token}`)
    });
    return next(modifiedReq);
  }
  return next(req);
};
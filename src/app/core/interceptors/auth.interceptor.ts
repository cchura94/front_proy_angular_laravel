import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("INTERCEPTOR: ", req.url);

  const token = localStorage.getItem("access_token");

  const peticion = req.clone({
    setHeaders: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }

  })

  return next(peticion).pipe(tap(() => {},
  (error: any) => {
    if(error instanceof HttpErrorResponse){
      if(error.status != 401){
        return;
      }

      localStorage.removeItem("access_token");
      
    }
  }));
};

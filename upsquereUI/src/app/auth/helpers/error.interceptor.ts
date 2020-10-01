import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private header: HeaderComponent) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.header.logout();
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
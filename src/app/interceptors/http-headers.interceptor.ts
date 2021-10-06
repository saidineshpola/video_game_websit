import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req=req.clone({
        setHeaders:{
            'x-rapidapi-key':'66fd29889emsh1c99b32f2c418f0p1cd7efjsn8f90693282ff',
            'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',

        },
        setParams:{
            key:'62451871244649de860a6303adcb49d3',
            
        }
    });
    return  next.handle(req);
  }
}       
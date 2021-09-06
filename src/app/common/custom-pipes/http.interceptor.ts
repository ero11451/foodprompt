import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      alert("Offline")
      return;
    }
    // get user data from local storage
    const userData = JSON.parse(localStorage.getItem("userToken"));
    // check if token is available and attach to the request
    if (userData && userData.token) {
      request = request.clone({
        headers: request.headers.set(
          "Authorization",
          "Bearer " + userData.token
        ),
      });
    }
    // check if request has form data(images/files/videos) attached to it
    if (!(request.body instanceof FormData)) {
      if (!request.headers.has("Content-Type")) {
        request = request.clone({
          headers: request.headers.set("Content-Type", "application/json"),
        });
      }
    }

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
        }
        return event;
      })
    );
  }
}

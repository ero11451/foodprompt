import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpErrorHandler } from '../common/custom-pipes/handlers/http-error-handler.service';
import { AppConfig } from '../common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: "root",
})

export class PaymentsService {

  handleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
    this.handleError = httpErrorHandler.createHandleError("PaymentsService");
  }

  /** GET TODOS */
  getTodos(): Observable<any[]> {
    return this.http
      .get<any[]>(AppConfig.BaseUrl + "todos")
      .pipe(catchError(this.handleError("todos", [])));
  }
}

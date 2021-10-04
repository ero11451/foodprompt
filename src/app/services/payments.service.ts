import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpErrorHandler } from '../common/custom-pipes/handlers/http-error-handler.service';
import { AppConfig } from '../common/custom-pipes/handlers/app.config';
import { PaystackOptions } from "angular4-paystack";

@Injectable({
  providedIn: "root",
})

export class PaymentsService {

  handleError;
  title
  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
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
  paymentInit() {
    console.log('Payment initialized');
  }
  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }
  paymentCancel() {
    console.log('payment failed');
  }
}

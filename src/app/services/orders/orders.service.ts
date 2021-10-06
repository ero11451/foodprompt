import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpErrorHandler } from "src/app/common/custom-pipes/handlers/http-error-handler.service";
import { AppConfig } from "src/app/common/custom-pipes/handlers/app.config";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  Orders;
  handleError;
  orderItems: any;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("OrdersService");
  }
  getOrderHistory(): Observable<any[]> {
    return this.http.get<any[]>(AppConfig.BaseUrl + "/order_history").pipe(
      map((res: any) => {
        // this.Orders = res.data;
        return res;
      }),
      catchError(this.handleError("orders", []))
    );
  }
  getVendorHistory(id): Observable<any[]> {
    return this.http.get<any[]>(AppConfig.BaseUrl + `/vendor_history`).pipe(
      map((res: any) => {
        // this.Orders = res.data;
        return res;
      }),
      catchError(this.handleError("orders", []))
    );
  }
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(AppConfig.BaseUrl + "/orders").pipe(
      map((res: any) => {
        this.Orders = res.data;
        return res.data;
      }),
      catchError(this.handleError("orders", []))
    );
  }
  addOrder(data): Observable<any> {
    return this.http
      .post(AppConfig.BaseUrl + "/orders", data)
      .pipe(catchError(this.handleError("orders", [])));
  }
  updateOrder(id, data): Observable<any> {
    return this.http
      .put(AppConfig.BaseUrl + `/orders/${id}`, data)
      .pipe(catchError(this.handleError("order", [])));
  }
  getSingleOrder(id): Observable<any> {
    return this.http
      .get<any>(AppConfig.BaseUrl + `/orders/${id}`)
      .pipe(catchError(this.handleError("Orders", [])));
  }
  getAllOrderItems(): Observable<any[]> {
    return this.http.get<any[]>(AppConfig.BaseUrl + "/order_items").pipe(
      map((res: any) => {
        this.orderItems = res.data;
        return res.data;
      }),
      catchError(this.handleError("Items", []))
    );
  }
  addOrderItem(data): Observable<any> {
    return this.http
      .post(AppConfig.BaseUrl + "/order_Items", data)
      .pipe(catchError(this.handleError("Items", [])));
  }
  updateOrderItem(id, data): Observable<any> {
    return this.http
      .put(AppConfig.BaseUrl + `/order_tems/${id}`, data)
      .pipe(catchError(this.handleError("Item", [])));
  }
  getSingleOrderItem(id): Observable<any> {
    return this.http
      .get<any>(AppConfig.BaseUrl + `/order_items/${id}`)
      .pipe(catchError(this.handleError("order_tems", [])));
  }
  stopTakingOrders(): Observable<any> {
    return this.http
      .post(AppConfig.BaseUrl + "/not_available", "")
      .pipe(catchError(this.handleError("orders", [])));
  }
  startTakingOrders(): Observable<any> {
    return this.http
      .post(AppConfig.BaseUrl + "/now_available", "")
      .pipe(catchError(this.handleError("orders", [])));
  }
}

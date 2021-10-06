import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, iif, Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  orderHistory

  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  cartItems: Array<[]> = [];
  isOrdered = new Subject();
  isShowCart: boolean = false;
  clickEmited = new Subject();
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.loadCart()
  }
  makeOrder(order) {
    
    return this.http.post<any>(this.API_URL + '/orders', order)
      .pipe(map(res => {
        if (res.statu == 200) {
             localStorage.setItem(`orderhistory`, JSON.stringify(order));
        } 
        console.log(res)
      }))
    catchError(this.handleError)
   
  }
  loadCart() {
    let ca = localStorage.getItem('cart');
    this.cartItems = JSON.parse(ca) 
    
 }
  showCart(m: boolean) {
    this.isOrdered.next(m);
    // console.log(this.isOrdered);
  }
  receiveCart(): Observable<any> {
    // console.log(this.isOrdered);
    return this.isOrdered.asObservable();
  }
  addToCart(items) {
    console.log(items, this.cartItems)
    if (!this.cartItems) {
      this.cartItems = []
    }
    //
    const filtered = this.cartItems.filter(value => value == items)
    if (filtered) {
      this.cartItems.push(items);
      localStorage.setItem(`cart`, JSON.stringify(this.cartItems));
    } else {
      return
    }
  }
  
  clearCart() {
    localStorage.clear()
    this.cartItems = []
    console.log('clear cart')
  }
  checkOut() {
    this.isOrdered.next(true);
  }

  increarsItem(oldText, newText){ 
    let todos = JSON.parse(localStorage.getItem('cart'));

    for(let i = 0; i <todos.length; i++) {
       if(todos[i].id == oldText.id) {
         todos[i] = newText;
         console.log('this form the searve', todos, newText)
       }
    }
       // Set New Todos
       localStorage.setItem('cart', JSON.stringify(todos));
    
  }

  deleteItem(todoText) {
    let todos = JSON.parse(localStorage.getItem('cart'));
    for(let i = 0; i <todos.length; i++) {
     if(todos[i].id == todoText.id) {
         todos.splice(i, 1);
     }
    }
    localStorage.setItem('cart', JSON.stringify(todos));
    
    }

  
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Handle client error
        errorMessage = error.error.message;
      } else {
        // Handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}

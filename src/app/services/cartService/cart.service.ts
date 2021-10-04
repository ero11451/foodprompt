import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  isOrdered = new Subject();
  isShowCart: boolean = false;
  clickEmited = new Subject();
  constructor() {
    this.loadCart()
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
    //
    const filtered = this.cartItems.filter(function (value, i) {
      return value === items;
    });
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

}

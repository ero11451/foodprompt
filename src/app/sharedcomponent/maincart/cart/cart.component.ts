import { PaymentsService } from 'src/app/services/payments.service';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';
import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { RegComponent } from 'src/app/pages/register/reg/reg.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  subTitle
  itemCaculatedPrice
  items
  updatedNumber
  totalAmount:number
  caculatedAmount
  checkoutNow:boolean = false
  reference = 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'
  constructor(
    public cartService: CartService,
    private paymentsService: PaymentsService,
    private matDialog : MatDialog
  ) { }
  checkIFuser() {
    let user = localStorage.getItem('user')
    if (user) {
      this.checkoutNow = true
    } else {
       this.checkoutNow = false 
    }
  }
  paymentCancel() {
    
  }
  paymentInit() {
    
  }
  paymentDone($event) {
    
  }
  ngOnInit(): void {
    this.getCart() 
    this.calulateTotal()
    this.checkIFuser()
  }
  calulateTotal() {
    let number = []
    this.items.forEach(element => { number.push(element.subtotal) });
    this.totalAmount = number.reduce((a, b) => a + b , 0); 
  }
  remove() {
    this.cartService
  }
  getCart() {
    this.items = this.cartService.cartItems;
    this.cartService.loadCart()
    console.log(this.items)
  }
  deleteTodo(todoText) {
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i] == todoText) {
          this.items.splice(i, 1);
      }
    }

    this.cartService.deleteItem(todoText);
    this.getCart()
  }
  increaseItem(data) {
    data.portion++
    data.subtotal = data.price * data.portion
    this.cartService.increarsItem(data, data);
    this.getCart()
    
    let number = []
    this.items.forEach(element => { number.push(element.subtotal) });
    this.totalAmount = number.reduce((a, b) => a + b , 0); 
  }
  decreaseItem(data) {
    data.portion--
    let total = data.subtotal - data.price 
    data.subtotal = total
    this.cartService.increarsItem(data, data);
    this.getCart()    
    let number = []
    this.items.forEach(element => { number.push(element.subtotal) });
    this.totalAmount = number.reduce((a, b) => a + b , 0); 
  }
  clearCart() {
    this.cartService.clearCart()
  }
 
  checkOut() {
    this.paymentsService.paymentInit()
    let user = localStorage.getItem('user')
    if (!user) {
      this.checkoutNow = false
      this.matDialog.open(RegComponent, {
        width: '400px'
      })    
    } else {
      this.paymentsService.paymentInit()
      this.checkoutNow = true
    }
    console.log(user)
  }
}

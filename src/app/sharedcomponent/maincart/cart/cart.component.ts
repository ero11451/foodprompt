import { PaymentsService } from 'src/app/services/payments.service';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';
import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { RegComponent } from 'src/app/pages/register/reg/reg.component';
import { PaystackOptions } from 'angular4-paystack';
import { ReceiptComponent } from '../receipt/receipt.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order:any = {}
  user:any
  subTitle
  itemCaculatedPrice
  items:any =[]
  updatedNumber
  amount:number = 0
  totalAmount:number = 0
  caculatedAmount:number
  checkoutNow: boolean = false
  title
  reference = 'pk_test_24dc30abf9fa5926bb49fcfbeff9e33e5c659e45'
  options: PaystackOptions = {
    amount: 100,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
  constructor(
    public cartService: CartService,
    private paymentsService: PaymentsService,
    private matDialog : MatDialog
  ) { 
  }
  checkIFuser() {
    this.user = localStorage.getItem('user')
  }
  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    let allQuantities = this.items.map(i =>  i.portion);
    let itemsID = this.items.map(i => i.id)
    this.title = 'Payment successfull';
    this.cartService.makeOrder({
     item : itemsID,
	   quantity : allQuantities,
     delivery_charge : "0",
     total_amount : this.totalAmount,
     payment_status : "approved",
     payment_method : "DEBIT CARD",
     delivery_address_id : 2,
     payment_ref : ref.reference
    }).subscribe(d => {
      console.log('this is form the server', d)
      this.matDialog.open(ReceiptComponent, {
        data: {
          amount: this.totalAmount,
          status: ref.status,
          reference: ref.reference,
          transaction: ref.transaction

        },
       })
    })
  }

  paymentCancel() {
    console.log('payment failed');
  }
  ngOnInit(): void {
    this.getCart() 
    this.checkIFuser()
    
  }
  remove() {
    this.cartService
  }
  getCart() {
    this.items = this.cartService.cartItems;
    this.cartService.loadCart()
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
  calulateTotal(){
    let number = []
    this.items.forEach(element => { number.push(element.subtotal) });
    this.totalAmount = number.reduce((a, b) => a + b , 0); 
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

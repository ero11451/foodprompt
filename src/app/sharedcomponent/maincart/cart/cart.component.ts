import { PaymentsService } from 'src/app/services/payments.service';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';
import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { RegComponent } from 'src/app/pages/register/reg/reg.component';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order:any = {}
  user
  subTitle
  itemCaculatedPrice
  items
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

//     item: (2) [{…}, {…}]
// message: "Approved"
// quantity: (2) [{…}, {…}]
// reference: "7884995389"
// status: "success"
// trans: "1370148473"
// transaction: "1370148473"
// trxref: "7884995389"


  //   "item" : [3 , 4],
	// "quantity" : [1, 1],
  //   "delivery_charge" : "200.93",
  //   "total_amount" : "1200.93",
  //   "payment_status" : "approved",
  //   "payment_method" : "DEBIT CARD",
  //   "delivery_address_id" : 2,
  //   "payment_ref" : "PWOE93E93U93003J33"

    this.title = 'Payment successfull';
    this.order.item = this.items
    this.order.quantity = []
    this.order.delivery_charge = ref.transaction
    this.order.total_amount = this.totalAmount
    this.order.payment_status = ref.status
    this.order.payment_method = 'DEBIT CARD'
    this.order.delivery_address_id = 1
    this.order.payment_ref = ref.reference
    console.log(this.order , ref)
    // localStorage.removeItem('cart')
    this.cartService.makeOrder(this.order).subscribe(d => console.log(d))
    console.log('this is after the payment is complete', this.title, this.order);
  }

  paymentCancel() {
    console.log('payment failed');
  }
  ngOnInit(): void {
    this.getCart() 
    this.calulateTotal()
    this.checkIFuser()
    
  }
  calulateTotal() {
    let number = []
    this.items.forEach(element => { number.push(element.subtotal) });
    this.totalAmount = number.reduce<number>((a, b) => a + b, 0); 
    this.options.amount = this.totalAmount * 100
    console.log('total amount',this.totalAmount)
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

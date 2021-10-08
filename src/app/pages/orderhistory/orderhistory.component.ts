import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  orderHistory
  constructor(private service: CartService) { }

  ngOnInit() {
    this.getHistory()
  }
  getHistory() {
    this.service.getOrderhistory().subscribe(data => {
      console.log('order history', data)
      this.orderHistory = data
     
    })
  }
}

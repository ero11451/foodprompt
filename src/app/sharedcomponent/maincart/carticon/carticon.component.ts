import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cartService/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrls: ['./carticon.component.css']
})
export class CarticonComponent implements OnInit {
  number:number = 0
  items = []
  constructor(
    public dialog: MatDialog,
    public cartService: CartService,) {}
  getCart() {
    this.items = this.cartService.cartItems;
    if (!this.items) {
      this.items = []
    }
    this.cartService.loadCart()
    console.log('this is from cart icon', this.items)
  }
  openCart(): any {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit(): void {
    this.getCart()
  }

}

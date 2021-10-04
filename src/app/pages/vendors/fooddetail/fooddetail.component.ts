
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartComponent } from 'src/app/sharedcomponent/maincart/cart/cart.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cartService/cart.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {
  foodID 
  food
  Vendor
  constructor(
    private ar: ActivatedRoute,
    private vendorService: MenuService,
    public dialog: MatDialog,
    private cartService : CartService,
    private router:Router
  ) { }

  ngOnInit(){
    this.foodID = this.ar.snapshot.params.id
    console.log('food id' ,this.foodID)
    if (this.foodID) {
      this.getFooddetail()
    }
  }
  orderNow(data) {
     data.portion = 1
    console.log('cart thi is about to be aved to the databae', data)
    this.cartService.addToCart(data) 
      
    const dialogRef = this.dialog.open(CartComponent, {
        width: '450px',
        // data: {name: this.name, animal: this.animal}
      });
     
    // console.log('orderNow', cart)
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.animal = result;
      // });
    
  }

  getFooddetail() {
    this.vendorService.getMenuVendor(this.foodID).subscribe(data => {
      this.food = data
      this.Vendor = data.vendor
      console.log(data)
    })
  }
  back() {
    this.router.navigate(['vendors/vedor', this.Vendor.id])
  }
}

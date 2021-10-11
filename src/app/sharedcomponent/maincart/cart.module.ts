import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CarticonComponent } from './carticon/carticon.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Angular4PaystackModule } from 'angular4-paystack';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    CartComponent,
    CarticonComponent,
    ReceiptComponent,
  ],
  exports: [
    CartComponent,
    CarticonComponent,
    ReceiptComponent,
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
    Angular4PaystackModule.forRoot('pk_test_24dc30abf9fa5926bb49fcfbeff9e33e5c659e45'),
  ],
  providers: [
    CurrencyPipe
]
})
export class CartModule { }

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    name: string,
    amount: number,
    status: string,
    reference: number,
    transaction:number
  }) { }

  ngOnInit() {
    console.log(this.data)
  }

}

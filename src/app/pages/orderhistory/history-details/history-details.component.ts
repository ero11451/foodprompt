import { DatePipe } from "@angular/common";
import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrdersService } from "src/app/services/orders/orders.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CartService } from "src/app/services/cartService/cart.service";
import { PaystackOptions } from "angular4-paystack";

@Component({
  selector: "app-history-details",
  templateUrl: "./history-details.component.html",
  styleUrls: ["./history-details.component.css"],
})
export class HistoryDetailsComponent implements OnInit {
  options: PaystackOptions = {
    amount: 0,
    email: "user@mail.com",
    ref: `${Math.ceil(Math.random() * 9e10) / Math.random()}`,
    currency: "NGN",
  };
  id;
  totalAmnt = 0;
  allQty: [] = [];
  allItms: [] = [];
  orders = [];
  deliveryChrg: any;
  transStats: any;
  transRef: any;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    public datePipe: DatePipe,
    private cart: CartService,
    public dialogRef: MatDialogRef<HistoryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = this.data.id;
    // console.log({ id: this.id, data: this.data });
  }

  ngOnInit(): void {
    this.getSingleHistory();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getSingleHistory() {
    this.orderService.getOrderHistory().subscribe((res: any) => {
      // console.log(res.data.data);
      let data = res.data.data;
      let currentHistory = data.filter((res) => {
        return res.id == this.id;
      });
      this.orders = currentHistory;
      this.orders.map((item: any) => {
        let date = new Date(item.created_at);
        let newDate = this.datePipe.transform(date, "MMM d, y, h:mm:ss a");
        item.created_at = newDate;
      });
      console.log("C H", currentHistory);
      this.reOrder();
    });
    // this.reOrder();
  }
  reOrder() {
    let allItems = this.orders[0].order_item.map((res) => {
      return res.item.id;
    });
    this.allItms = allItems;
    let allQuantit = this.orders[0].order_item.map((res) => {
      return res.quantity;
    });
    this.allQty = allQuantit;
    let deliveryCharge = this.orders[0].delivery_charge;
    this.deliveryChrg = deliveryCharge;
    let totalPrice = this.orders[0].total_amount;
    this.totalAmnt = totalPrice;
    this.totalAmnt = Number(Math.round(this.totalAmnt * 100));
    this.options.amount = this.totalAmnt;

    console.log("total price", this.options.amount);
    console.log({
      item: allItems,
      quantity: allQuantit,
      delivery_charge: deliveryCharge,
      total_amount: totalPrice,
      payment_status: "pending",
      payment_method: `PayStack`,
      payment_ref: "",
    });
    console.log({ optionamt: this.options.amount, totalamnt: this.totalAmnt });

    return;
  }
  paymentInit(ref: any) {
    this.options.amount = this.totalAmnt;
    console.log("Payment initialized");
  }

  paymentDone(ref: any) {
    console.log("Payment done");
    this.transStats = ref.message;
    this.transRef = ref.reference;
    this.orderService
      .addOrder({
        item: this.allItms,
        quantity: this.allQty,
        delivery_charge: this.deliveryChrg,
        total_amount: this.totalAmnt,
        payment_status: "pending",
        payment_method: `PayStack`,
        delivery_address_id: 2,
        payment_ref: this.transRef,
      })
      .subscribe((res) => {
        console.log("added to db res", res);
        // localStorage.removeItem("cart");
      });
  }
  paymentCancel() {
    console.log("payment failed");
  }
}

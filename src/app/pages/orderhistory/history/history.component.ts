import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrdersService, public datePipe: DatePipe) {
    this.orderService.getOrderHistory().subscribe((res: any) => {
      console.log(res.data.data);
      this.orders = res.data.data;
      this.orders.map((item: any) => {
        let date = new Date(item.created_at);
        let newDate = this.datePipe.transform(date, "MMM d, y, h:mm:ss a");
        console.log({ date: date, newDate: newDate });
        item.created_at = newDate;
      });
    });
  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  ngOnInit(): void {}
}

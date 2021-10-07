import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrdersService } from "src/app/services/orders/orders.service";

@Component({
  selector: "app-history-details",
  templateUrl: "./history-details.component.html",
  styleUrls: ["./history-details.component.css"],
})
export class HistoryDetailsComponent implements OnInit {
  id;
  orders = [];
  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    public datePipe: DatePipe
  ) {
    this.id = +this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getSingleHistory();
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
        console.log({ date: date, newDate: newDate });
        item.created_at = newDate;
      });
      console.log(currentHistory);
    });
  }
}

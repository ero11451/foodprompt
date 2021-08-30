import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

transHistory = {
  dailyVolume: 2342,
  dailyTotal: 4000000,
  totalVolume: 452000,
  totalValue: 4000000
}

orderSummary = {
  pending: 10,
  reconciled: 80,
  total: 100
}

paymentSummary = {
  unreconciled: 110,
  reconciled: 90,
  total: 200
}
date = new Date();
title = 'Today';
type = 'LineChart';
data = [
   ["Jan",  7.0, 0.1, 0.1, 3.9],
   ["Feb",  6.9, 0.8, 0.6, 4.2],
   ["Mar",  9.5,  5.7, 3.5, 5.7],
   ["Apr",  26.5, 24.1, 17.9, 16.6],
   ["May",  13.9,  8.6, 3.9, 6.6],
   ["Jun",  9.6,  2.5,  1.0, 4.8]
];
columnNames = ["Month", "Tokyo", "New York","Berlin", "Paris"];
options = {   
   hAxis: {
      title: ''
   },
   vAxis:{
      title: ''
   },
   pointSize:5
};

  constructor() { }

  ngOnInit(): void {
   
  }

}

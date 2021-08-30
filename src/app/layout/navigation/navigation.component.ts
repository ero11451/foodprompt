import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

menu = [
    {label:"Main", items:["Overview"]},
    {label:"Payments", items:["All Payments", "Reconciled Payments", "Un - Reconciled Payments", "Manual Settlement"]},
    {label:"Orders", items:["All Orders", "Pending Orders", "Reconciled Orders"]},
    {label:" ", items:["Merchant Profile"]}
  ]
  
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  ngOnInit(): void {
  }

}

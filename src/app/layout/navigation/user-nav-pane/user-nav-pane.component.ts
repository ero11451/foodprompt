import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-nav-pane',
  templateUrl: './user-nav-pane.component.html',
  styleUrls: ['./user-nav-pane.component.css']
})
export class UserNavPaneComponent implements OnInit {
  // public user: User = {
  //   firstname: "Orokotan",
  //   imageUrl: "user.jpg"
  //   lastname: "Yemif",
  // };
  
  user:any = {}
  userName
  constructor() { }

  ngOnInit(){
    
    let us = localStorage.getItem('user');
    this.user = JSON.parse(us) 
    this.userName = this.user.last_name + this.user.first_name
  }

}

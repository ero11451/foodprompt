import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-nav-pane',
  templateUrl: './user-nav-pane.component.html',
  styleUrls: ['./user-nav-pane.component.css']
})
export class UserNavPaneComponent implements OnInit {
  public user: User = {
    firstname: "Orokotan",
    lastname: "Yemi",
    imageUrl: "IMG_20200131_170825_8.jpg",
  };
  constructor() { }

  ngOnInit(): void {
  }

}

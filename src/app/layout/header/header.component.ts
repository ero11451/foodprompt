import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName :string = '';

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public onToggleSidenav = () => { 
    
    this.sidenavToggle.emit();

  }

  user
  ngOnInit(){
    
    let us = localStorage.getItem('user');
    this.user = JSON.parse(us) 
    this.userName = this.user.last_name + this.user.first_name
  }

}

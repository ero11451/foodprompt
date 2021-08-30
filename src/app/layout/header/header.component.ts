import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = "Yemi Orokotan";

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public onToggleSidenav = () => { 
    
    this.sidenavToggle.emit();

  }

  ngOnInit(): void {
  }

}

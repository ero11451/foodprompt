import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainMenu } from 'src/app/models/menu';
import { topMenu, bottomMenu } from "./menu";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  /*
  add menu items in the menu.ts file ./menu.ts
  */ 
  // initialize top and bottom menu
  public topMenu: Array<MainMenu> = topMenu;
  public bottomMenu: Array<MainMenu> = bottomMenu;
  public showMenu: boolean = true;

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  ngOnInit(): void {
  }

}

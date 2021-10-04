import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainMenu } from 'src/app/models/menu';
import { LogoutComponent } from 'src/app/pages/register/logout/logout.component';
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

  constructor(
    public dialog: MatDialog,
  ) { }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  ngOnInit(): void {
  }
  logout() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

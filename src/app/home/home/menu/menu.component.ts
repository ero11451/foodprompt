import { MenuService } from 'src/app/services/menu/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  menu:any = []
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(){
    this.menuService.getfav_menus().subscribe(data => {
     console.log(data)
   })
  }

}

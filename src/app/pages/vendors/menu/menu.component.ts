import { VendorService } from 'src/app/services/vendor/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any = {}
  Vendor :any = {}
  vendorID: number
  
  isSearch:boolean = false
  searchMenu :any = []
  constructor(
    private ar: ActivatedRoute,
    private vendorService: VendorService,
    private menuService: MenuService,
    private router: Router
   ) { }

  ngOnInit() {
  this.getMenu()
  }
  back() {
  }
  search(event: any){
    console.log(event.target.value);

    if (!event.target.value || event.target.value.length == 2) {
      
    } else {
      this.isSearch = true
      this.menuService.searchMenu(event.target.value).subscribe(data => {
        let food = data.filter(d => d.type == 'items')
        this.searchMenu =  food.filter(d => d.searchable.vendor_id == this.vendorID)
        console.log('vendor', this.searchMenu)
      })
    }
 }
  getMenu() {
    this.vendorID = this.ar.snapshot.params.id
    this.vendorService.getSingalVendor(this.vendorID).subscribe(data => {
      this.menus = data.menu
      this.Vendor = data
      console.log(data)
    })
  }
  
navTo(id) {
  this.router.navigate(['vendors/detail', id])
}
}

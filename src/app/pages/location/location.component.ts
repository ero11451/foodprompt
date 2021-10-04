import { element } from 'protractor';

import { VendorService } from 'src/app/services/vendor/vendor.service';
import { Component, OnInit } from '@angular/core';
import { BecomeavendorComponent } from '../vendors/becomeavendor/becomeavendor.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations : any = []
  Vendors: any = []
  values
  searching:boolean= false
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private searchSer: SearchService,
    
    private vendorSer: VendorService,
    private locationService: LocationService
  ) {   }

  ngOnInit() {
    this.loadLocation()
  }
  navTo(vendor) {
    this.router.navigate(['/vendors/vedor', vendor.id])
  }
  onKey(event: any) { // without type info
    if (!event.target.value || event.target.value.length == 1) {
      this.searching = false
    } else {
      this.searching = true
      this.values += event.target.value + ' | ';
      this.vendorSer.searchVendor(event.target.value).subscribe(data => {
        this.Vendors = data.filter(d => d.type == 'vendors')
        console.log('vendor', this.Vendors)
      })
    }
  }
  becomeVendor() {
    const dialogRef = this.dialog.open(BecomeavendorComponent, {
      width: '400px',
    });
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openVendor(location) {
    this.searching = true
    this.searchSer.search(location)
      .subscribe(res => this.Vendors = res)
  }
  loadLocation() {
    this.locationService.getListoflocaion()
      .subscribe(data => {
      this.locations = data
    })
  }
  viewVendor(id) {
    this.router.navigate(['vendors/vedor', id])
  }

}

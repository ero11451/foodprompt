
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BecomeavendorComponent } from '../becomeavendor/becomeavendor.component';
import { VendorService } from 'src/app/services/vendor/vendor.service';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {
  
  routerVendorname: string

  isSearch:boolean = false
  Vendors : any = []
  searchVendors :any = []
  constructor(
    private ar: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private vendorSer: VendorService
  ) { 
    
  }

  ngOnInit() {
    this.loadVendors()
    
    this.routerVendorname = this.ar.snapshot.params.location
    console.log(this.routerVendorname)
  }
  
  becomeVendor() {
    const dialogRef = this.dialog.open(BecomeavendorComponent, {
      width: '500px',
      height:'500px'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  search(event: any){
    console.log(event.target.value);

    if (!event.target.value || event.target.value.length == 2) {
      
    } else {
      this.isSearch = true
      this.vendorSer.searchVendor(event.target.value).subscribe(data => {
        this.searchVendors = data.filter(d => d.type == 'vendors')
        console.log('vendor', this.searchVendors)
      })
    }
 }
  // {{vendor.address.house_no }} 
  // {{vendor.address.street_name}} ,
  // {{vendor.address.lga}} ,
  // {{vendor.address.state}} ,
  // {{vendor.address.country}}  
  loadVendors() {
    this.vendorSer.getVendors().subscribe(data => {
      this.Vendors = data
    })
  }
  viewVendor(id) {
    this.router.navigate(['vendors/vedor', id])
  }

}

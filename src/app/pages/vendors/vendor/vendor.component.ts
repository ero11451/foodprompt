
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/vendor/review.service';
import { VendorService } from 'src/app/services/vendor/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendorID
  slides = []
  Vendor:any= {}
  VendorAddrees:any = {}
  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private reviewService: ReviewService,
    private vendorSer: VendorService
  ) { }

  ngOnInit() {
    this.loadvendor()
  }

  loadvendor() {
    this.vendorID = this.ar.snapshot.params.id
    console.log(this.vendorID)
    this.vendorSer.getSingalVendor(this.vendorID).subscribe(data => {
      this.Vendor = data || {}
      this.slides = data.menu
      this.VendorAddrees = data.address
      console.log(data)
    })
  }
 

  navTo() {
    this.router.navigate(['vendors/menu', this.vendorID])
  }

}

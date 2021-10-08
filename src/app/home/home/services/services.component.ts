import { VendorService } from 'src/app/services/vendor/vendor.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  list:any = []
  constructor(
    private vendorSer: VendorService
  ) { }

  ngOnInit() {
    this.vendorSer.getVendors().subscribe(vendor => {
      this.list = vendor
      console.log(this.list)
    })
  }

}

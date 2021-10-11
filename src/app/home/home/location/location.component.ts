import { Router } from '@angular/router';
import { LocationService } from './../../../services/location/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location
  constructor(
    private router: Router,
    private locationService : LocationService
  ) { }

  ngOnInit() {
    this.locationService.getListoflocaion().subscribe(data => {
      this.location = data
    })
  }
  navTo(location) {
   this.router.navigate(['/location/locationname',location])    
  }
}

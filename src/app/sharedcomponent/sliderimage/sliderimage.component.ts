import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliderimage',
  templateUrl: './sliderimage.component.html',
  styleUrls: ['./sliderimage.component.css']
})
export class SliderimageComponent implements OnInit {
  @Input() itemList: any;
  @Input() slides: any;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  route(id) {
    this.router.navigate(['vendors/detail', id])
  }
}

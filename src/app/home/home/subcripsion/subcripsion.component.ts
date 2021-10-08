import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcripsion',
  templateUrl: './subcripsion.component.html',
  styleUrls: ['./subcripsion.component.css']
})
export class SubcripsionComponent implements OnInit {

  constructor() { }
  workLIst :any = [
    {
      title: 'Rider',
      image: 'card-img1',
      content: '',
      btn: 'Ride with us',
      bg:'bg'
    },
    {
      title: 'Restaurant',
      image: 'card-img2',
      content: '',
      btn: 'Partner with us',
      bg:'bg2'
    },
    {
      title: 'Careers',
      image: 'card-img3',
      content: '',
      bg:'bg3 '
    },
   ]
  ngOnInit(): void {
  }

}

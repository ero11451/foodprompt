import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}

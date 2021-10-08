import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  categories
  constructor(
    private categorySer: CategoriesService
  ) { }

  ngOnInit() {
    this.categorySer.getCategory().subscribe(data => {
      this.categories = data
      console.log('categories', data)
    })
  }

}

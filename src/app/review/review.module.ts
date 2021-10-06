import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ReviewComponent
  ],
  exports: [
    ReviewComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class ReviewModule { }

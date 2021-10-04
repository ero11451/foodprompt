import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderimageComponent } from './sliderimage.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    SliderimageComponent
  ],
  exports: [
    SliderimageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class SliderimageModule { }

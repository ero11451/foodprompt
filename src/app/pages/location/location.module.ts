import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartModule } from 'src/app/sharedcomponent/maincart/cart.module';

const routes: Routes = [
  {
    path: '', 
    component: LocationComponent,
  },
  {
    path: "**",
    component: LocationComponent
  }
];

@NgModule({
  declarations: [
    LocationComponent
  ],
  exports: [
    LocationComponent,
    RouterModule
  ],
  imports: [
    MatListModule,
    CommonModule,
    CartModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class LocationModule { }

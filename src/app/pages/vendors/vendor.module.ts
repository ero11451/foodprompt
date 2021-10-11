
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"

// import { SliderimageModule } from '../sharedcomponent/sliderimage/sliderimage.module';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { ReviewComponent } from '../review/review/review.component';
// import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
// import { CartModule } from '../sharedcomponent/maincart/cart.module';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CartModule } from 'src/app/sharedcomponent/maincart/cart.module';
import { SliderimageModule } from 'src/app/sharedcomponent/sliderimage/sliderimage.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemModule } from './item/item.module';
import { MenuComponent } from './menu/menu.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { ReviewModule } from 'src/app/review/review.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Routes = [
  {
    path: '', 
    component: VendorlistComponent,
  },
  {
    path: 'vendorbylovation/:location', 
    component: VendorlistComponent,
  },
  {
    path: 'vedor/:id', 
    component: VendorComponent,
  },
  {
    path: 'menu/:id', 
    component: MenuComponent,
  },
  {
    path: 'detail/:id',
    component: FooddetailComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    FooddetailComponent,
    VendorComponent,
    VendorlistComponent,
    MenuComponent
  ],
  exports: [
    FooddetailComponent,
    VendorComponent,
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes),
    MatListModule,
    CartModule,
    CommonModule,
    ItemModule,
    MatBadgeModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
  
    MatSnackBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    SliderimageModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    GoogleChartsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ReviewModule,
    FormsModule
  ]
})
export class VendorModule { }

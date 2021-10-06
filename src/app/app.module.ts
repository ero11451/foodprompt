import { MatButtonModule } from '@angular/material/button';
import { SliderimageModule } from './sharedcomponent/sliderimage/sliderimage.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { OverviewComponent } from './pages/main/overview/overview.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AllPaymentsComponent } from './pages/payments/all-payments/all-payments.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentsService } from './services/payments.service';
import { HttpErrorHandler } from './common/custom-pipes/handlers/http-error-handler.service';
import { MessageService } from './common/custom-pipes/handlers/message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { HttpConfigInterceptor } from './common/custom-pipes/http.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatGridListModule} from '@angular/material/grid-list';

import { Angular4PaystackModule } from 'angular4-paystack';
import { CartModule } from './sharedcomponent/maincart/cart.module';
import { ItemModule } from './pages/vendors/item/item.module';
import { RegisterModule } from './pages/register/register.module';
import { UpdatevendorComponent } from './account/updatevendor/updatevendor.component'

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AllPaymentsComponent,
    
  ],
  imports: [
    Angular4PaystackModule.forRoot('pk_test_24dc30abf9fa5926bb49fcfbeff9e33e5c659e45'),
    CartModule,
    ItemModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RegisterModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    SliderimageModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    GoogleChartsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PaymentsService, HttpErrorHandler, MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

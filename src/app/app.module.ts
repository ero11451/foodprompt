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
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import {FormsModule} from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AllPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [PaymentsService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

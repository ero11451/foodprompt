import { MatListModule } from "@angular/material/list";

import { OrderhistoryComponent } from "./orderhistory.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HttpClientModule } from "@angular/common/http";
import { GoogleChartsModule } from "angular-google-charts";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NohistoryComponent } from "./nohistory/nohistory.component";
import { HistoryComponent } from "./history/history.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";
import { CartModule } from "src/app/sharedcomponent/maincart/cart.module";
import { DatePipe } from "@angular/common";
import { HistoryDetailsComponent } from './history-details/history-details.component';

const routes: Routes = [
  {
    path: "",
    component: OrderhistoryComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [OrderhistoryComponent, NohistoryComponent, HistoryComponent, HistoryDetailsComponent],
  exports: [OrderhistoryComponent],
  providers: [DatePipe],
  imports: [
    MatListModule,
    CartModule,
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    GoogleChartsModule,
    MatToolbarModule,
    FormsModule,
  ],
})
export class OrderhistoryModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './pages/main/overview/overview.component';
import { AllPaymentsComponent } from './pages/payments/all-payments/all-payments.component';

const routes: Routes = [
  { path: "layout", loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule)},
  { path: "main/overview", component: OverviewComponent },
  { path: "payments/allPayments", component: AllPaymentsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

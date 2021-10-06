// import { FooddetailComponent } from './vendors/fooddetail/fooddetail.component';
// import { VendorComponent } from './vendors/vendor/vendor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './pages/main/overview/overview.component';
import { AllPaymentsComponent } from './pages/payments/all-payments/all-payments.component';
import { LogoutComponent } from './pages/register/logout/logout.component';
const routes: Routes = [
  {
    path: "layout",
    loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule)
  },
  {
    path: "admin",  loadChildren: () =>
    import("./admin/admin/admin.module").then((m) => m.AdminModule)

  },
  {
    path: "main/overview",
    component: OverviewComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule)
  },
  {
    path: "location",
    loadChildren: () =>
      import("./pages/location/location.module").then((m) => m.LocationModule)
  },
  {
    path: "payments/allPayments",
    component: AllPaymentsComponent
  },
  {
    path: 'order_history',
    loadChildren: () =>
      import("./pages/orderhistory/orderhistory.module").then((m) => m.OrderhistoryModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import("./pages/vendors/vendor.module").then((m) => m.VendorModule)
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

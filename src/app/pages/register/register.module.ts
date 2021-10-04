import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RegComponent } from './reg/reg.component';
import { VendorModule } from '../vendors/vendor.module';
import { BecomeavendorComponent } from '../vendors/becomeavendor/becomeavendor.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  exports: [
    RegisterComponent,
    LoginComponent,
    BecomeavendorComponent,
    LogoutComponent,
    RegComponent
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    BecomeavendorComponent,
    RegComponent
  ],
  imports: [
    VendorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }

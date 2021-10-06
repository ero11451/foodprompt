import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './admin.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
  },
  {
    path: "**",
    component: AdminComponent
  }
];


@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }

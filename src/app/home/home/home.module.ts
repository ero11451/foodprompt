import { TestimonyComponent } from './testimony/testimony.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { MenuComponent } from './menu/menu.component';
import { SubcripsionComponent } from './subcripsion/subcripsion.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { DownloadComponent } from './download/download.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    TestimonyComponent,
    SubcripsionComponent,
    MenuComponent,
    HeaderComponent,
    LocationComponent,
    FooterComponent,
    DownloadComponent,
    ServicesComponent,
    HomeComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CommonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }

import { MatCardModule } from '@angular/material/card';
import { ReviewModule } from './../review/review.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkAreaComponent } from './work-area/work-area.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RemoveWhiteSpacePipe } from '../common/custom-pipes/remove-white-space.pipe';
import { RouterModule } from '@angular/router';
import { LowerCaseFirst } from '../common/custom-pipes/lower-case-first.pipe';
import { UserNavPaneComponent } from './navigation/user-nav-pane/user-nav-pane.component';




@NgModule({
  declarations: [
    WorkAreaComponent,
    HeaderComponent, 
    NavigationComponent, 
    RemoveWhiteSpacePipe, 
    LowerCaseFirst, UserNavPaneComponent],
  imports: [
    ReviewModule,
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule
  ],
  exports: [WorkAreaComponent,
    RemoveWhiteSpacePipe,
    LowerCaseFirst
  ],
})
export class LayoutModule { }

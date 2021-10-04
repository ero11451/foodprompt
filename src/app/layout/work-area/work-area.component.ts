import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {
  showFiller = true;
  isLoading: boolean;
  hideSideNav: boolean = true;
  hideSideTray: boolean = true;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  hideNav() {
    this.hideSideNav = !this.hideSideNav;
  }
  hideTray() {
    this.hideSideTray = !this.hideSideTray;
  }
  
  public screenWidth: any;

  public screenHeight: any;

  ngOnInit(): void {
    
    this.screenWidth = window.innerWidth;

    this.screenHeight = window.innerHeight;
    if (this.screenWidth == 411 || this.screenWidth < 411 ) {
      this.hideSideNav = false;
      this.hideSideTray = false;
    }
  }
}

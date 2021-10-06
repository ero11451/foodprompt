import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar
  ) { }
  logOut() {
    localStorage.removeItem('user')
    this._snackBar.open('You have successfully logout. ')
  }
  ngOnInit(){
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/auth/register.service';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  isVendor = false
  data = false;    
  userForm: any;    
  massage:string; 
  user
  
  ngOnInit(){
    
    let us = localStorage.getItem('user');
    this.user = JSON.parse(us) 
    console.log('user from local storage', this.user)
    if (this.user.vendor_id) {
      this.isVendor = true
    }
    this.formIN()
  }
  
      
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private authService: RegisterService
  ) {  
  }

  formIN() {
    this.userForm = this.formBuilder.group({
      first_name : [ this.user.first_name, Validators.required],
      last_name : [this.user.last_name, Validators.required],
      email : [this.user.email,[ Validators.required, Validators.email]],
      phone : [this.user.phone, Validators.required],
      // password: [thi, [Validators.required, Validators.minLength(6)]],
      // password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
      // validator: MustMatch('password', 'password_confirmation')
    });
    console.log(this.userForm )
  }
  onSubmit() {
    console.log(this.userForm.value,  localStorage.getItem('user'))
    const user = this.userForm.value;
    user.id = this.user.id
    
    this.authService.updateUser(user).subscribe(res => {
      if (res.status == 'ok') {
        this._snackBar.open('Your profile was successfully updated');
        localStorage.setItem(`user`, JSON.stringify(user))
      } else {
        console.log(res)
      }
    })
  }
}

import { RegComponent } from './../reg/reg.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data = false;    
  userForm: any;    
  massage:string;    
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private authService: RegisterService
  ) {  
    this.formIN()
  }

  ngOnInit() {  
  }
  formIN() {
    this.userForm = this.formBuilder.group({
      email : ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // validator: MustMatch('password', 'password_confirmation')
    });
  }
  onSubmit() {
    const user = this.userForm.value;
    this.authService.login(user).subscribe(res => {
      if (res.status == 'ok') {
        localStorage.setItem(`user`, JSON.stringify(res.data))
        localStorage.setItem('token', res.token)
        this.dialog.closeAll();
      }
    })
  }
}

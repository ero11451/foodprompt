
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  data = false;    
  userForm: any;    
  massage:string;    
  constructor(
    private formBuilder: FormBuilder,
    private authService: RegisterService
  ) {  
    this.formIN()
  }

  ngOnInit() {  
  }
  formIN() {
    this.userForm = this.formBuilder.group({
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      email : ['',[ Validators.required, Validators.email]],
      phone : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
      // validator: MustMatch('password', 'password_confirmation')
    });
  }
  onSubmit() {
    const user = this.userForm.value;
    this.authService.CreateUser(user).subscribe(res => {
      if (res.status == 'ok') {
        localStorage.setItem(`user`, JSON.stringify(res.data))
        localStorage.setItem('token',res.token)
      }
      console.log(res)
    })
     console.log(user) 
  }
   onFormSubmit(data) {    
      // this.Createemployee(user);    
    }    
  // Createemployee(register:Register)    
  // {    
  // this.authService.CreateUser(register).subscribe(respons=>  console.log(respons) );
  // }    

}
function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}


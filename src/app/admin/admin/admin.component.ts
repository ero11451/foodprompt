import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VendorService } from 'src/app/services/vendor/vendor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data = false;    
  vendorForm: any;    
  massage: string;
  serverHttp: HttpClient;
  response
  token: string = localStorage.getItem('token')
  
  loadingImage 
  imageid 
  imagepriview 
  constructor(
    private formBuilder: FormBuilder,
    private httpBackend: HttpBackend,
    private authService: VendorService
  ) {  
    this.formIN()
    this.serverHttp = new HttpClient(httpBackend);
    console.log(this.token)
  }

  ngOnInit() {  
  }
  formIN() {
    this.vendorForm = this.formBuilder.group({
      contact_name : ['',[ Validators.required]],
      email : ['', Validators.required, Validators.email],
      contact_email : ['', Validators.required, Validators.email],
      contact_phone: ['', [Validators.required, Validators.minLength(6)]],
      type_id : ['', [Validators.required]],
      name : ['', [Validators.required]] ,
      address_id :['', [Validators.required]],
      class : ['', [Validators.required]],
      opening_time: ['', [Validators.required]],
      closing_time : ['', [Validators.required ]],
      promo: ['', [Validators.required]],
      password:['',[Validators.required]],
      image_id : ['', [Validators.required]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
      // validator: MustMatch('password', 'password_confirmation')
    });
  }
  onSubmit() {
    const user = this.vendorForm.value;
    this.authService.becomeAvendor(user).subscribe(res => console.log(res))
  }
   onFormSubmit(data) {    
      // this.Createemployee(user);    
    }    
 
    uploadFile(event: any) {
      // this.loadingImage = true;
      let file = event.target.files[0];
      let form = new FormData();
      // form.append("user_id", this.userId);
      form.append("file", file, file.name);
      // console.log("file uploadiing", ...form);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer  ${this.token}`,
        }),
      };
  
      return this.serverHttp
        .post<any>("http://18.232.48.197/fb/public/api/files", form, httpOptions)
        .subscribe((d) => {
          // console.log("image input", d);
          this.loadingImage = false;
          if (d.status === "ok") {
            this.loadingImage = false;
            this.imageid = d.image_id;
            this.imagepriview = d.file;
            // this._snackBar.open("Your file is ready for use.", "close");
          }
          if (d.status == 0) {
            this.loadingImage = false;
            // this._snackBar.open(d.message, "close");
          }
          // if (d.status == 'ok') {
  
          // }
        });
    }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  getVendorBylocation(location) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/vendorByLocation/'+ location , { headers })
      .pipe(map((res: any) => {
        console.log(res)
        if (res.status === 'ok') {
          this._snackBar.open(res.message)
        } else {
          this._snackBar.open(res.message)
        }
           return res.data || {}
       }),
       catchError(this.handleError)
     )
  }

  becomeAvendor(user){
    return this.http.post<any>(this.API_URL + '/register_vendor', user)
      .pipe(map(vendor => {
        console.log('this from the vendor service', vendor)
      if (vendor.status === 'ok') {
          localStorage.clear()
          localStorage.setItem(`user`, JSON.stringify(vendor.data));
      } else {
        return 'There was an error with your input'
      }
    }))
    catchError(this.handleError)
     
  }

  
  updateVendor(user){
      return this.http.put<any>(this.API_URL + '/vendors/' + user.id , user)
        .pipe(catchError(this.handleError));
    }
  searchVendor(data) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/search/'+ data , { headers })
      .pipe(map((res: any) => {
           console.log(res)
           return res.data || {}
       }),
       catchError(this.handleError)
     )
  }
  getVendors() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
     return this.http.get(this.API_URL + '/vendors' , { headers })
       .pipe(map((res: any) => {
            console.log(res)
            return res.data || {}
        }),
        catchError(this.handleError)
      )
  }
  getSingalVendor(id) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
     return this.http.get(this.API_URL + '/vendors/'+id , { headers })
     .pipe(map((res: any) => {
            return res.data || {}
        }),
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

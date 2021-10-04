import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  constructor(private http: HttpClient) { }
  getVendorBylocation(location) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/vendorByLocation/'+ location , { headers })
      .pipe(map((res: any) => {
           console.log('location service', res.data)
           return res.data || {}
       }),
       catchError(this.handleError)
     )
  }
 
  getListoflocaion() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/vendorLocations', { headers })
      .pipe(map((res: any) => {
           return res.data.data|| []
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

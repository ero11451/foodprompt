import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  constructor(private http: HttpClient) { }
  searchMenu(data) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/search/'+ data , { headers })
      .pipe(map((res: any) => {
           console.log(res)
           return res.data || {}
       }),
       catchError(this.handleError)
     )
  }
  getMenu() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
     return this.http.get(this.API_URL + '/items' , { headers })
       .pipe(map((res: any) => {
            console.log(res)
            return res.data || {}
        }),
        catchError(this.handleError)
      )
  }
  getMenuVendor(id) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
     return this.http.get(this.API_URL + '/items/'+id , { headers })
       .pipe(map((res: any) => {
            console.log('this from res',res)
            return res.data
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

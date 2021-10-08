import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  
  getCategory() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
     return this.http.get(this.API_URL + '/categories' , { headers })
       .pipe(map((res: any) => {
            console.log(res)
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

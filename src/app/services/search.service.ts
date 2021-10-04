import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../common/custom-pipes/handlers/app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  token = AppConfig.Token
  API_URL = AppConfig.BaseUrl;
  constructor(private http: HttpClient) { }
  search(data) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
    return this.http.get(this.API_URL + '/search/'+ data , { headers })
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

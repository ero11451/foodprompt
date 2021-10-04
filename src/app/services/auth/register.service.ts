import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/custom-pipes/handlers/app.config';
import { Register } from 'src/app/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  API_URL = AppConfig.BaseUrl;
  constructor(private http : HttpClient) { }
  CreateUser(user){
    return this.http.post<any>(this.API_URL + '/register', user)
      .pipe(catchError(this.handleError));
  }

  updateUser(user){
    return this.http.put<any>(this.API_URL + '/users/' + user.id , user)
      .pipe(catchError(this.handleError));
  }
  logOut() {
    localStorage.removeItem('user')
  }
  login(user) {
    return this.http.post<any>(this.API_URL + '/login', user)
      .pipe(catchError(this.handleError));    
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

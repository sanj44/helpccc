import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(this.backendUrl + `user/register`, data)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  login(data: any) : Observable<any> {
    return this.http.post(this.backendUrl + `user/login`, data) as Observable<any>;
  }

  updateTags(data: any) : Observable<any> {
    return this.http.post(this.backendUrl + `user/updateTags`, data) as Observable<any>;
  }

  errorHandler(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError( () => errorMessage);
  }

}

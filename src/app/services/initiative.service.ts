import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Initiative } from '../models/initiative';

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {
  constructor(private http: HttpClient) { }

  addMeInInitiative(data: any): Observable<any> {
    console.log(data);    
    return this.http.post(environment.backendUrl + `initiative/addUserToInitiative`, data) as Observable<any>;
  }

  fetchMyInitiatives(data: any): Observable<Initiative[]> {
    return this.http.post(environment.backendUrl + `initiative/fetchMyInitiative`, data) as Observable<Initiative[]>;
  }

  fetchThisInitiative(id: string): Observable<Initiative> {
    return this.http.get(environment.backendUrl + `initiative/getInitiative`+id) as Observable<Initiative>;
  }

  fetchAllInitiatives(): Observable<Initiative[]> {
    console.log('fetch');
    
    return this.http.get(environment.backendUrl + `initiative/fetchInitiativess`) as Observable<Initiative[]>;
  }

  createInitiative(data: any) {
    return this.http.post(environment.backendUrl + `initiative/createInitiative`, data)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  updateInitiative(data: any) {
    return this.http.put(environment.backendUrl + `initiative/updateInitiative`, data)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError( () => errorMessage);
  }
}

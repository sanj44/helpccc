import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(this.backendUrl + `user/register`, data) as Observable<any>
  }
  login(data: any) : Observable<any> {
    return this.http.post(this.backendUrl + `user/login`, data) as Observable<any>;
  }

  updateTags(data: any) : Observable<any> {
    return this.http.post(this.backendUrl + `user/updateTags`, data) as Observable<any>;
  }


}

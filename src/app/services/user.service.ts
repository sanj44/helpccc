import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(environment.backendUrl + `user/register`, data) as Observable<any>
  }
  login(data: any) : Observable<any> {
    return this.http.post(environment.backendUrl + `user/login`, data) as Observable<any>;
  }

  updateTags(data: any) : Observable<any> {
    return this.http.post(environment.backendUrl + `user/updateTags`, data) as Observable<any>;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingInService {
  public loggedInUser = new BehaviorSubject('');
  public loggedInUserObs$  = this.loggedInUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  loginAuthenticate(loginCredentials: any): Observable<any> {
    return this.httpClient.post('http://roomstoinn.com:9090/loginProcess', {
      email: loginCredentials.username,
      password: loginCredentials.password
    });
  }

  setLoggedInUserInfo(user: any) {
    this.loggedInUser.next(user);
  }
}

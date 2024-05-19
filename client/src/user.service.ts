import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import User from './app/models/User'

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async inspectUser(username: string = 'andrew') {
    let data = await this.http.get<User>(inspectUserUrl + username).toPromise();
    return data;
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http.get<User[]>(duelUsersUrl + `username=${user1}&username=${user2}`).toPromise();
    return data;
  }

}

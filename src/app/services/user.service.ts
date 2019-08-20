import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{User} from '../models/user';

//import { APIURL } from '../../environments/environment.prod';

 const APIURL = 'https://localhost:44381/';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  getUsers(){
    return this._http.get(`${APIURL}api/Account/UserList`, {headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  getUser(){
    return this._http.get(`${APIURL}api/Account/DetailUser`, {headers: this.getHeaders()});
  }
  updateUser(user: User){
    return this._http.put(`${APIURL}api/Account/changeuserinfo`, user, {headers: this.getHeaders()});
  }
  deleteUser(user: User){
    return this._http.put(`${APIURL}api/Account/RemoveUser`, user, {headers: this.getHeaders()});
  }
}

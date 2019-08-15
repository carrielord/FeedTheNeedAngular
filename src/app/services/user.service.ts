import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{User} from '../models/user';
const ApiUrl = 'https://localhost:44381/';
@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  getUsers(){
    return this._http.get(`${ApiUrl}/Account/Users`, {headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  getUser(){
    return this._http.get(`${ApiUrl}api/Account/DetailUser`, {headers: this.getHeaders()});
  }
  updateUser(user: User){
    return this._http.put(`${ApiUrl}api/Account/changeuserinfo`, user, {headers: this.getHeaders()});
  }
  deleteUser(id: number){
    return this._http.delete(`${ApiUrl}api/Account/Users/${id}`, {headers: this.getHeaders()});
  }
}

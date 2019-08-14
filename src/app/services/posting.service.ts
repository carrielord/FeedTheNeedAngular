import { Injectable } from '@angular/core';
import { Posting } from '../models/posting';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://feedtheneedwebapi20190807040544.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(posting: Posting){
    return this._http.post(`${Api_Url}/api/Posting`, posting, { headers: this.getHeaders() });
  }
  getPostList(){
    return this._http.get(`${Api_Url}/api/Posting`);
  }
  getPostDetail(id: string){
    return this._http.get(`${Api_Url}/api/Posting/${id}`);
  }
  updatePost(posting: Posting){
    return this._http.put(`${Api_Url}/api/Posting`, posting, { headers: this.getHeaders() });
  }
  deletePost(id: number){
    return this._http.delete(`${Api_Url}/api/Posting/${id}`, { headers: this.getHeaders() });
  }
  
  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

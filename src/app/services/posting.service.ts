import { Injectable } from '@angular/core';
import { Posting } from '../models/posting';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://feedtheneedwebapi20190807040544.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(createPostData: Posting){
    return this._http.post(`${Api_Url}/api/Posting`, createPostData, { headers: this.getHeaders() });
  }
  getPostList(){
    return this._http.get(`${Api_Url}/api/Posting`);
  }
  getPostDetail(id: number){
    return this._http.get(`${Api_Url}/api/Posting/${id}`);
  }
  updatePost(editPostData: Posting){
    return this._http.put(`${Api_Url}/api/Posting`, editPostData, { headers: this.getHeaders() });
  }
  deletePost(id: number){
    return this._http.delete(`${Api_Url}/api/Posting/${id}`, { headers: this.getHeaders() });
  }
  
  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

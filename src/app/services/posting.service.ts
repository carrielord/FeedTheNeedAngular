import { Injectable } from '@angular/core';
import { PostingCreate } from '../models/postingcreate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostingEdit } from '../models/postingedit';

const Api_Url = 'https://feedtheneedwebapi20190807040544.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(createPostData: PostingCreate){
    return this._http.post(`${Api_Url}/api/Posting`, createPostData, { headers: this.getHeaders() });
  }
  getPostList(){
    return this._http.get(`${Api_Url}/api/Posting`);
  }
  getPostDetail(){
    return this._http.get(`${Api_Url}/api/Posting`);
  }
  updatePost(editPostData: PostingEdit){
    return this._http.put(`${Api_Url}/api/Posting`, editPostData, { headers: this.getHeaders() });
  }
  deletePost(){
    return this._http.delete(`${Api_Url}/api/Posting`, { headers: this.getHeaders() });
  }
  
  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

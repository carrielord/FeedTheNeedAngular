import { Injectable } from '@angular/core';
import { Posting } from '../models/posting';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://localhost:44381/api';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(posting: Posting){
    return this._http.post(`${Api_Url}/Posting`, posting, { headers: this.getHeaders() });
  }
  getPostList(){
    return this._http.get(`${Api_Url}/Posting`, { headers: this.getHeaders() });
  }
  getPostDetail(id: string){
    return this._http.get(`${Api_Url}/Posting/${id}`, { headers: this.getHeaders() });
  }
  updatePost(posting: Posting){
    return this._http.put(`${Api_Url}/Posting`, posting, { headers: this.getHeaders() });
  }
  deletePost(id: number){
    return this._http.delete(`${Api_Url}/Posting/${id}`, { headers: this.getHeaders() });
  }
  
  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

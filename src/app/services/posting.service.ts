import { Injectable } from '@angular/core';
import{Posting} from '../models/posting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

// const APIURL = 'https://localhost:44381/api';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(posting: Posting){
    return this._http.post(`${APIURL}/Posting`, posting, { headers: this.getHeaders() });
  }
  getPostList(){
    return this._http.get(`${APIURL}/Posting`, { headers: this.getHeaders() });
  }
  getPostDetail(id: string){
    return this._http.get(`${APIURL}/Posting/${id}`, { headers: this.getHeaders() });
  }
  getPostUserDetail(id: string){
    return this._http.get(`${APIURL}/Account/PostingDetailUser?id=${id}`, {headers: this.getHeaders()})
  }
  updatePost(posting: Posting){
    return this._http.put(`${APIURL}/Posting`, posting, { headers: this.getHeaders() });
  }
  deletePost(id: number){
    return this._http.delete(`${APIURL}/Posting/${id}`, { headers: this.getHeaders() });
  }
  getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

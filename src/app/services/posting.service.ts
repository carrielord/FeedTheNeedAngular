import { Injectable } from '@angular/core';
import { PostingCreate } from '../models/postingcreate';
import { HttpClient } from '@angular/common/http';

const Api_Url = 'https://feedtheneedwebapi20190807040544.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private _http: HttpClient) { }

  createPost(createPostData: PostingCreate){
    return this._http.post(`${Api_Url}/api/Posting`, createPostData)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from '../models/Organization';

const ApiUrl = 'https://feedtheneedwebapi20190807040544.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  constructor(private _http: HttpClient) { }

  createOrganization(organization: Organization) {
    return this._http.post(`${ApiUrl}/Organization`, organization, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }
}

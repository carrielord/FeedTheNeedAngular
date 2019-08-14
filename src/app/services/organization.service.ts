import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from '../models/Organization';

const ApiUrl = 'https://feedtheneed.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  constructor(private _http: HttpClient ) { }

  getOrganization(id: string) {
    return this._http.get(`${ApiUrl}/Organization/${id}`, { headers: this.getHeaders() });
  }

  getOrganizations() {
    return this._http.get(`${ApiUrl}/Organization`, { headers: this.getHeaders() });
  }

  createOrganization(organization: Organization) {
    return this._http.post(`${ApiUrl}/Organization`, organization, { headers: this.getHeaders() });
  }

  updateOrganization(organization: Organization) {
    return this._http.put(`${ApiUrl}/Organization`, organization, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }
}

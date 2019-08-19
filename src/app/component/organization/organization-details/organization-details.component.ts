import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../../services/organization.service';
import { Organization } from '../../../models/organization';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {

  organization: Organization;

  constructor(private _activeRoute: ActivatedRoute, private _organizationService: OrganizationService) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(routeData => {
      this._organizationService.getOrganization(routeData.get('id')).subscribe((singleOrganization: Organization) => {
        this.organization = singleOrganization;
      });
      console.log(routeData);
    });
  }

}

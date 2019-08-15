import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/models/Organization';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organization-delete',
  templateUrl: './organization-delete.component.html',
  styleUrls: ['./organization-delete.component.css']
})
export class OrganizationdeleteComponent implements OnInit {

  organization: Organization;

  constructor(private _organizationService: OrganizationService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._organizationService.getOrganization(p.get('id')).subscribe((singleOrganization: Organization) => {
        this.organization = singleOrganization;
      });
    });
  }
  onDelete() {
  this._organizationService.deleteOrganization(this.organization.OrganizationID).subscribe(() => {
  this._router.navigate(['/organizations']);
  });
  }
  ngOnInit() {
  }
}

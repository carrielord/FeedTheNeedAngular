import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Organization } from '../../../models/organization';
import { OrganizationService } from '../../../services/organization.service';


@Component({
  selector: 'app-organization-index',
  templateUrl: './organization-index.component.html',
  styleUrls: ['./organization-index.component.css']
})
export class OrganizationindexComponent implements OnInit {

  columnNames = ['OrganizationID', 'OrganizationName', 'OrganizationBio', 'OrganizationLink', 'buttons' ];
  dataSource: MatTableDataSource<Organization>;

  constructor(private _organizationService: OrganizationService) { }

  ngOnInit() {
    this._organizationService.getOrganizations().subscribe((organizaions: Organization[]) => {
      this.dataSource = new MatTableDataSource<Organization>(organizaions);
      console.log(organizaions)
    })
  }

}

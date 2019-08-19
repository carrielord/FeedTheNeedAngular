import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Organization } from '../../../models/organization';
import { OrganizationService } from '../../../services/organization.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-organization-index',
  templateUrl: './organization-index.component.html',
  styleUrls: ['./organization-index.component.css']
})
export class OrganizationindexComponent implements OnInit {

  columnNames = ['OrganizationID', 'OrganizationName', 'OrganizationBio', 'OrganizationLink', 'buttons' ];
  dataSource: MatTableDataSource<Organization>;

  user: User;

  constructor(private _organizationService: OrganizationService, private _userService: UserService) { }

  ngOnInit() {
    this._organizationService.getOrganizations().subscribe((organizaions: Organization[]) => {
      this.dataSource = new MatTableDataSource<Organization>(organizaions);
      console.log(organizaions);
      this.getUserRole();
    })
  }
  getUserRole(){
    this._userService.getUser().subscribe((singleUser: User) => {
      this.user = singleUser;
      console.log(this.user.Role)
    })
  }
  isAdmin(){
    if(this.user.Role=='Admin'){
      return true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from '../../../models/organization';
import { OrganizationService } from '../../../services/organization.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-organization-delete',
  templateUrl: './organization-delete.component.html',
  styleUrls: ['./organization-delete.component.css']
})
export class OrganizationdeleteComponent implements OnInit {

  organization: Organization;
  user: User;

  constructor(private _organizationService: OrganizationService, private _userService: UserService, private _ar: ActivatedRoute, private _router: Router) { 
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
    this.getUserRole();
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

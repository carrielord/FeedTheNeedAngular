import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from 'src/app/services/organization.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationcreateComponent implements OnInit {

  organizationForm: FormGroup;
  user: User;

  constructor(private _organizationService: OrganizationService, private _userService: UserService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
    this.getUserRole();
   }

  ngOnInit() {
  }

  createForm() {
    this.organizationForm = this._form.group({
      OrganizationName: new FormControl,
      OrganizationLink: new FormControl,
      OrganizationBio: new FormControl
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
  onSubmit() {
    this._organizationService.createOrganization(this.organizationForm.value).subscribe(data => {
      this._router.navigate(["/organizations"]);
    });
  }
  
}

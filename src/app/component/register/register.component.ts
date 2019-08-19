import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Organization } from '../../models/organization'
import { MatTableDataSource } from '@angular/material';
import { OrganizationService } from '../../services/organization.service';

@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.css']
})
// export class OrganizationindexComponent implements OnInit {

//   columnNames = ['OrganizationName', 'OrganizationBio', 'OrganizationLink', 'buttons' ];
//   dataSource: MatTableDataSource<Organization>;

//   constructor(private _organizationService: OrganizationService) { }

//   ngOnInit() {
//     this._organizationService.getOrganizations().subscribe((organizaions: Organization[]) => {
//       this.dataSource = new MatTableDataSource<Organization>(organizaions);
//       console.log(organizaions)
//     })
//   }

// }
export class RegisterComponent implements OnInit {
 _registerForm: FormGroup;
 organizations: Organization;
 dataSource: MatTableDataSource<Organization>;

 constructor(private _form: FormBuilder, private _authService: AuthService) {
   this.createForm();
  }
 ngOnInit() {
 }
 createForm(){
   this._registerForm = this._form.group({
     email: new FormControl,
     password: new FormControl,
     confirmPassword: new FormControl,
     firstName: new FormControl,
     lastName: new FormControl,
     OrganizationName: new FormControl,
     phoneNumber: new FormControl
   });
 }
 onSubmit(){
   console.log(this._registerForm.value);
   this._authService
   .register(this._registerForm.value)
   .subscribe(()=>this._authService.register(this._registerForm.value));
 }
}
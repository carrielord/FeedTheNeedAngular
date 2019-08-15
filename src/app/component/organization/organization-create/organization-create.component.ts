import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from 'src/app/services/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationcreateComponent implements OnInit {

  organizationForm: FormGroup;

  constructor(private _organizationService: OrganizationService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
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

  onSubmit() {
    this._organizationService.createOrganization(this.organizationForm.value).subscribe(data => {
      this._router.navigate(["/organizations"]);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from 'src/app/services/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-notorganizatione-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationeditComponent implements OnInit {

  organization: Organization;

  editOrganizationForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _organizationService:OrganizationService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

    this._ar.paramMap.subscribe(p => {
      this._organizationService.getOrganization(p.get('id')).subscribe((singleOrganization: Organization) => {
        this.organization = singleOrganization;
        this.createForm();
      });
    });
}

  ngOnInit() {
  }

  createForm() {
    this.editOrganizationForm = this._form.group({
      OrganizationID: new FormControl(this.organization.OrganizationID),
      OrganizationName: new FormControl(this.organization.OrganizationName),
      OrganizationLink: new FormControl(this.organization.OrganizationLink),
      OrganizationBio: new FormControl(this.organization.OrganizationBio)
    })
  }

  onSubmit(form) {
    console.log(this.organization)
    const updateOrganization: Organization = {
      OrganizationID: form.value.OrganizationID,
      OrganizationName: form.value.OrganizationName,
      OrganizationLink: form.value.OrganizationLink,
      OrganizationBio: form.value.OrganizationBio
    };
    this._organizationService.updateOrganization(updateOrganization).subscribe(d => {
      this._router.navigate(['/organizations']);
    })
  }
}

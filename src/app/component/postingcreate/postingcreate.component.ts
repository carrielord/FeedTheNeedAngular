import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/organization';
import { MatTableDataSource } from '@angular/material';
import { OrganizationService } from 'src/app/services/organization.service';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-postingcreate',
  templateUrl: './postingcreate.component.html',
  styleUrls: ['./postingcreate.component.css']
})
export class PostingcreateComponent implements OnInit {
  foods: Category[] = [
    {value: 'Food', viewValue: 'Food'},
    {value: 'Items', viewValue: 'Items'},
    {value: 'Services', viewValue: 'Services'}
  ];
  
  postingForm: FormGroup;
  organizations: any;
  dataSource: MatTableDataSource<Organization>;
  
  constructor(private _form: FormBuilder, private _postingService: PostingService, private _organizationService: OrganizationService, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
    this._organizationService.getOrganizations().subscribe((organizations: Organization[]) => {
      this.dataSource = new MatTableDataSource<Organization>(organizations);
      console.log(organizations)
      this.organizations = organizations;
      })
  }

createForm(){
  this.postingForm = this._form.group({	
    title: new FormControl,
    details: new FormControl,
    address: new FormControl,	
    city: new FormControl,
    state: new FormControl,
    nameOfProvider:	new FormControl,
    category: new FormControl,
    dateAvailable: new FormControl
  });
}

onSubmit(){
  console.log(this.postingForm.value);
  this._postingService.createPost(this.postingForm.value).subscribe(data => {
    this._router.navigate(['/posting/list']);
  });
}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  editUserForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _userService:UserService, private _router: Router) { 

                this._userService.getUser().subscribe((singleUser: User) => {
                  this.user = singleUser;
                  this.createForm();
      });
    }

  ngOnInit() {
  }
  createForm() {
    this.editUserForm = this._form.group({
    //     FirstName: string;
    // LastName: string;
    // Email: string;
    // PhoneNumber: string;
    FirstName: new FormControl(this.user.FirstName),
    LastName: new FormControl(this.user.LastName),
    Email: new FormControl(this.user.Email),
    PhoneNumber: new FormControl(this.user.PhoneNumber)
    });
  }

  onSubmit(form) {
    console.log(this.user)
    const updateUser: User = {
    //     FirstName: string;
    // LastName: string;
    // Email: string;
    // PhoneNumber: string;
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      Email: form.value.Email,
      PhoneNumber: form.value.PhoneNumber
    };
    this._userService.updateUser(updateUser).subscribe(d => {this._router.navigate(['/userdetails']);
    })
  }
}
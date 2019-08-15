import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User;
  deleteUserForm: FormGroup;
  
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
    this.deleteUserForm = this._form.group({
    //     FirstName: string;
    // LastName: string;
    // Email: string;
    // PhoneNumber: string;
    UserID: new FormControl(this.user.UserID),
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
      UserID: form.value.UserID,
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      Email: form.value.Email,
      PhoneNumber: form.value.PhoneNumber
    };
    this._userService.updateUser(updateUser).subscribe(d => {this._router.navigate(['/userdetails']);
    })
  }
}
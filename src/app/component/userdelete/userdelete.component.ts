import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
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

 onDelete(){

 this._userService.deleteUser(this.user).subscribe(()=>{
   this._router.navigate(['/']);
 });
}
ngOnInit(){
}
}
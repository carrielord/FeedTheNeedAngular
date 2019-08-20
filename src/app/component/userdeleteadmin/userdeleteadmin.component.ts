import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-userdeleteadmin',
  templateUrl: './userdeleteadmin.component.html',
  styleUrls: ['./userdeleteadmin.component.css']
})
export class UserdeleteadminComponent implements OnInit {

  user: User;
  deleteUserForm: FormGroup;
  
  constructor(private _form: FormBuilder,
              private _userService:UserService, private _router: Router, private _postingService: PostingService) { 

                this._userService.getUser().subscribe((singleUser: User) => {
                  this.user = singleUser;
                  this.createForm();
                  this.getUserRole();
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

 this._userService.deleteUserAdmin(this.user.UserID).subscribe(()=>{
   this._router.navigate(['/userlist']);
 });
}
ngOnInit(){
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

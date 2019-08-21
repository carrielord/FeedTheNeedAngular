import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-userdeleteadmin',
  templateUrl: './userdeleteadmin.component.html',
  styleUrls: ['./userdeleteadmin.component.css']
})
export class UserdeleteadminComponent implements OnInit {

  user: User;
  adminUser: User;
  posting: Posting;
  deleteUserForm: FormGroup;
  
  constructor(private _form: FormBuilder,
              private _userService:UserService, private _router: Router, private _postingService: PostingService, private _activatedRoute: ActivatedRoute) { 
                this._activatedRoute.paramMap.subscribe(p=>{
                  this._postingService.getPostUserDetail(p.get('id')).subscribe((singleUser: User) => {
                  this.user = singleUser;
                  console.log(this.user)
                  // this.createForm();
                  // console.log(this.user)
                  this.getUserRole();
                  console.log(this.user)
                })
                
      });
    }


  // createForm() {
  //   this.deleteUserForm = this._form.group({
  //   //     FirstName: string;
  //   // LastName: string;
  //   // Email: string;
  //   // PhoneNumber: string;
  //   UserID: new FormControl(this.user.UserID),
  //   FirstName: new FormControl(this.user.FirstName),
  //   LastName: new FormControl(this.user.LastName),
  //   Email: new FormControl(this.user.Email),
  //   PhoneNumber: new FormControl(this.user.PhoneNumber)
  //   });
  // }

 
ngOnInit(){
}
getUserRole(){
  this._userService.getUser().subscribe((userRole: User) => {
    this.adminUser = userRole;
    console.log(this.adminUser.Role)
  })
}
isAdmin(){
  if(this.adminUser.Role=='Admin'){
    return true;
  }
}

onDelete(){

 this._userService.deleteUserAdmin(this.user.UserID).subscribe(()=>{
   this._router.navigate(['/userlist']);
 });
}


}

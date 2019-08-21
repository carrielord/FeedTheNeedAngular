import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { User} from '../../models/user';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserRole } from 'src/app/models/userrole';
@Component({
 selector: 'app-userdetails',
 templateUrl: './userdetails.component.html',
 styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user: User;
userRole: UserRole;
 constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, private _authService: AuthService) { }
 ngOnInit() {
   // this._activatedRoute.paramMap.subscribe(routeData=>{this._userService.getUser(routeData.get('id')).subscribe((singleUser: User)=>{
   //   this.user= singleUser;
   // });
   // });
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
  // isItAdmin(){
  //   this._authService.isAdmin().subscribe((userRole: UserRole) => {
  //    this.userRole = userRole;
  //  }) 
  //  if(this.userRole.Role=='Admin'){
  //    return true;
  //  }
   }
//      checkAdmin(){
//        if (this.user.Email == 'carrie@test.com')
//        return true;
//  }


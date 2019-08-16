import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { User} from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
 selector: 'app-userdetails',
 templateUrl: './userdetails.component.html',
 styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user: User;
 constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, ) { }
 ngOnInit() {
   // this._activatedRoute.paramMap.subscribe(routeData=>{this._userService.getUser(routeData.get('id')).subscribe((singleUser: User)=>{
   //   this.user= singleUser;
   // });
   // });
   this._userService.getUser().subscribe((singleUser: User) => {
     this.user = singleUser;
   })
 }
}

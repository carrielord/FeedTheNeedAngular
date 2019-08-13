import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { User} from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
@Component({
 selector: 'app-userdetails',
 templateUrl: './userdetails.component.html',
 styleUrls: ['./userdetails.component.css']
})
export class userdetailsComponent implements OnInit {
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

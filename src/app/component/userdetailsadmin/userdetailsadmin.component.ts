import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Posting } from 'src/app/models/posting';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-userdetailsadmin',
  templateUrl: './userdetailsadmin.component.html',
  styleUrls: ['./userdetailsadmin.component.css']
})
export class UserdetailsadminComponent implements OnInit {


  user: User;
  adminUser: User;
  posting: Posting
  constructor(private _userService: UserService, private _postingService: PostingService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(p=>{
      this._postingService.getPostUserDetail(p.get('id')).subscribe((singleUser: User) => {
      this.user = singleUser;
      console.log(this.user)
      this.getUserRole();
    })
                
  });
   }

  ngOnInit() {
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
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  columnNames = ['First Name', 'Last Name', 'Email']

  dataSource: MatTableDataSource<User>

  user: User;

  constructor(private _userService: UserService) { 
    this.getUserRole(); }

  ngOnInit() {
    this._userService.getUsers().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource<User>(users);
    });
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

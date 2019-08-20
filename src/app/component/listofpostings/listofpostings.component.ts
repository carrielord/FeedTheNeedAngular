import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';
import { MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-listofpostings',
  templateUrl: './listofpostings.component.html',
  styleUrls: ['./listofpostings.component.css']
})
export class ListofpostingsComponent implements OnInit {
  
  columnNames = ['details', 'Title', 'State', 'Available Until', 'buttons']
  
  dataSource: MatTableDataSource<Posting>
  
  currentUser: string;
  user: User;
  posting: Posting;

  constructor(private _postingService: PostingService, private _userService: UserService) { this.getUserID()}
  
  ngOnInit() {
    this._postingService.getPostList().subscribe((postings: Posting[]) => {
      this.dataSource = new MatTableDataSource<Posting>(postings);
      console.log(postings)
    });
  }
  getUserID(){
    this._userService.getUser().subscribe((singleUser: User) => {
      this.user = singleUser;
      console.log(this.user.UserID);
      this.currentUser = this.user.UserID;
      //console.log(this.posting.UserID)
    })
  }
  // isUser(){
  //   if (this.posting.UserID == this.user.UserID){
  //     return true;
  //   }
  // }


}

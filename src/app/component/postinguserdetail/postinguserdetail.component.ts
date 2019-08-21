import { Component, OnInit } from '@angular/core';
import { Posting } from 'src/app/models/posting';
import { PostingService } from 'src/app/services/posting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-postinguserdetail',
  templateUrl: './postinguserdetail.component.html',
  styleUrls: ['./postinguserdetail.component.css']
})
export class PostinguserdetailComponent implements OnInit {

posting: Posting;
user: User;

  constructor(private _postingService: PostingService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._postingService.getPostDetail(p.get('id')).subscribe((singlePost: Posting) => {
        this.posting = singlePost;
        this.getUserInfo();
      });
    });
   }

   columnNames: ['First Name:', 'Last Name:', 'Phone Number:', 'Email:']

   dataSource: MatTableDataSource<User>

  ngOnInit() {
  }

  getUserInfo(){
    this._postingService.getPostUserDetail(this.posting.UserID).subscribe((userPostDetails: User) =>{
      this.user = userPostDetails;
    });
  }

}

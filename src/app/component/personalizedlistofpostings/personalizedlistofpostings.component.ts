import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../services/posting.service';
import { Posting } from '../../models/posting';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-personalizedlistofpostings',
  templateUrl: './personalizedlistofpostings.component.html',
  styleUrls: ['./personalizedlistofpostings.component.css']
})
export class PersonalizedlistofpostingsComponent implements OnInit {
  
  columnNames = ['details', 'Title', 'State', 'Available Until', 'buttons']
  
  dataSource: MatTableDataSource<Posting>

  user: User;
  posting: Posting;
  
  constructor(private _postingService: PostingService) { }
  
  ngOnInit() {
    this._postingService.getPostList().subscribe((postings: Posting[]) => {
      this.dataSource = new MatTableDataSource<Posting>(postings);
      // if (this.posting.UserID != this.user.UserID){

      // }
    });
  }
} 

import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { PostingCreate } from 'src/app/models/postingcreate';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listofpostings',
  templateUrl: './listofpostings.component.html',
  styleUrls: ['./listofpostings.component.css']
})
export class ListofpostingsComponent implements OnInit {

  constructor(private _postingService: PostingService) { }
  
  columnNames = ['Title:', 'State:', 'Available Until:']

  dataSource: MatTableDataSource<PostingCreate>

  ngOnInit() {
    this._postingService.getPostList().subscribe((postings: PostingCreate[]) => {
      this.dataSource = new MatTableDataSource<PostingCreate>(postings);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listofpostings',
  templateUrl: './listofpostings.component.html',
  styleUrls: ['./listofpostings.component.css']
})
export class ListofpostingsComponent implements OnInit {

  constructor(private _postingService: PostingService) { }
  
  columnNames = ['Title:', 'State:', 'Available Until:']

  dataSource: MatTableDataSource<Posting>

  ngOnInit() {
    this._postingService.getPostList().subscribe((postings: Posting[]) => {
      this.dataSource = new MatTableDataSource<Posting>(postings);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { MatTableDataSource } from '@angular/material';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-postingdetail',
  templateUrl: './postingdetail.component.html',
  styleUrls: ['./postingdetail.component.css']
})
export class PostingdetailComponent implements OnInit {

  constructor(private _postingService: PostingService) { }

  columnNames = ['Title:', 'Details:', 'Address:', 'City:', 'State:', 'Organization:', 'Category:', 'Date Posted:', 'Available Until:', 'Is Completed?']

  dataSource: MatTableDataSource<Posting>

  ngOnInit() {
    this._postingService.getPostDetail().subscribe((posting: Posting[]) => {
      this.dataSource = new MatTableDataSource<Posting>(posting);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { MatTableDataSource } from '@angular/material';
import { Posting } from 'src/app/models/posting';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postingdetail',
  templateUrl: './postingdetail.component.html',
  styleUrls: ['./postingdetail.component.css']
})
export class PostingdetailComponent implements OnInit {

  posting: Posting;

  constructor(private _postingService: PostingService, private _activatedRoute: ActivatedRoute) { }

  columnNames = ['Title:', 'Details:', 'Address:', 'City:', 'State:', 'Organization:', 'Category:', 'Date Posted:', 'Available Until:', 'Is Completed?']

  dataSource: MatTableDataSource<Posting>

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._postingService.getPostDetail(routeData.get('id')).subscribe((singlePost: Posting) => {
        this.posting = singlePost;
      });
    });
  }

}

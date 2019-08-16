import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../services/posting.service';
import { MatTableDataSource } from '@angular/material';
import { Posting } from '../../models/posting';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-postingdetail',
  templateUrl: './postingdetail.component.html',
  styleUrls: ['./postingdetail.component.css']
})
export class PostingdetailComponent implements OnInit {

  posting: Posting;
  user: User;

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

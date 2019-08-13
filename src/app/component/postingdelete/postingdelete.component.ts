import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-postingdelete',
  templateUrl: './postingdelete.component.html',
  styleUrls: ['./postingdelete.component.css']
})
export class PostingdeleteComponent implements OnInit {

  constructor(private _postingService: PostingService) { }

  ngOnInit() {
  }

  onDelete(){
    this._postingService.deletePost().subscribe(() => {
      this.
    });
  }
}

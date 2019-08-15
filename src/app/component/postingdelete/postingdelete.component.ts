import { Component, OnInit } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Posting } from 'src/app/models/posting';

@Component({
  selector: 'app-postingdelete',
  templateUrl: './postingdelete.component.html',
  styleUrls: ['./postingdelete.component.css']
})
export class PostingdeleteComponent implements OnInit {

  posting: Posting;

  constructor(private _postingService: PostingService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._postingService.getPostDetail(p.get('id')).subscribe((singlePost: Posting) => {
        this.posting = singlePost;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this._postingService.deletePost(this.posting.postID).subscribe(() => {
      this._router.navigate(['/posting/list'])
    });
  }
}

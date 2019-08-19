import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from '../../services/posting.service';
import { Posting } from '../../models/posting';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postingedit',
  templateUrl: './postingedit.component.html',
  styleUrls: ['./postingedit.component.css']
})
export class PostingeditComponent implements OnInit {

  posting: Posting;
  postingEditForm: FormGroup;

  constructor(private _form: FormBuilder, private _postingService: PostingService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._postingService.getPostDetail(p.get('id')).subscribe((singlePost: Posting) => {
        this.posting = singlePost;
        console.table(this.posting);
        this.createForm();
      });
    });
  }

  ngOnInit() {

  }

  createForm() {
    this.postingEditForm = this._form.group({
      PostID: new FormControl(this.posting.PostID),
      Title: new FormControl(this.posting.Title),
      Details: new FormControl(this.posting.Details),
      Address: new FormControl(this.posting.Address),
      City: new FormControl(this.posting.City),
      State: new FormControl(this.posting.State),
      NameOfProvider: new FormControl(this.posting.NameOfProvider),
      Category: new FormControl(this.posting.Category),
      DateAvailable: new FormControl(this.posting.DateAvailable),
      IsCompleted: new FormControl(this.posting.IsCompleted)
    });
  }

  onSubmit(form) {
    const updatePost: Posting = {
      PostID: form.value.PostID,
      Title: form.value.Title,
      Details: form.value.Details,
      Address: form.value.Address,
      City: form.value.City,
      State: form.value.State,
      NameOfProvider: form.value.NameOfProvider,
      Category: form.value.Category,
      DateAvailable: form.value.DateAvailable,
      IsCompleted: form.value.IsCompleted
    };

    console.log(this.postingEditForm.value);
    this._postingService.updatePost(updatePost).subscribe(d => {
      this._router.navigate(['/posting/list'])
    });
  }

}

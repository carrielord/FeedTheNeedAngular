import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';
import { format } from 'util';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postingedit',
  templateUrl: './postingedit.component.html',
  styleUrls: ['./postingedit.component.css']
})
export class PostingeditComponent implements OnInit {

  posting: Posting;
  private _postingEditForm: FormGroup;

  constructor(private _form: FormBuilder, private _postingService: PostingService, private _activatedRoute: ActivatedRoute, private _router: Router ) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._postingService.getPostDetail(p.get('id')).subscribe((singlePost: Posting) =>{
        this.posting = singlePost;
        this.editForm();
      });
    });
   }

  ngOnInit() {
  }


  editForm(){
    this._postingEditForm = this._form.group({	
      title: new FormControl(this.posting.title),
      details: new FormControl(this.posting.details),
      address: new FormControl(this.posting.address),	
      city: new FormControl(this.posting.city),
      state: new FormControl(this.posting.state),
      nameOfProvider:	new FormControl(this.posting.nameOfProvider),
      category: new FormControl(this.posting.category),
      dateAvailable: new FormControl(this.posting.dateAvailable),
      isCompleted: new FormControl(this.posting.isCompleted)
  });
  }

  onSubmit(form){
    const updatePost: Posting = {
      title: form.value.title,
      details: form.value.details,
      address: form.value.address,
      city: form.value.city,
      state: form.value.state,
      nameOfProvider:	form.value.nameOfProvider,
      category: form.value.category,
      dateAvailable: form.value.dateAvailable,
      isCompleted: form.value.isCompleted
    };

    console.log(this._postingEditForm.value);
    this._postingService.updatePost(updatePost).subscribe(d => {
      this._router.navigate(['/posting/list'])
    });
  }

}

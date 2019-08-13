import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';
import { Posting } from 'src/app/models/posting';
import { format } from 'util';

@Component({
  selector: 'app-postingedit',
  templateUrl: './postingedit.component.html',
  styleUrls: ['./postingedit.component.css']
})
export class PostingeditComponent implements OnInit {

  posting: Posting;
  private _postingEditForm: FormGroup;

  constructor(private _form: FormBuilder, private _PostingService: PostingService ) {
    this.editForm();
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

  onSubmit(_form){
    const updatePost: Posting = {
      title: _form.value.title,
      details: _form.value.details,
      address: _form.value.address,
      city: _form.value.city,
      state: _form.value.state,
      nameOfProvider:	_form.value.nameOfProvider,
      category: _form.value.category,
      dateAvailable: _form.value.dateAvailable,
      isCompleted: _form.value.isCompleted
    };

    console.log(this._postingEditForm.value);
    this._PostingService.updatePost(this._postingEditForm.value).subscribe( () => console.log('you did it!'));
  }

}

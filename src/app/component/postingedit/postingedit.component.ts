import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-postingedit',
  templateUrl: './postingedit.component.html',
  styleUrls: ['./postingedit.component.css']
})
export class PostingeditComponent implements OnInit {

  private _postingEditForm: FormGroup;

  constructor(private _form: FormBuilder, private _PostingService: PostingService ) {
    this.editForm();
   }

  ngOnInit() {
  }

  editForm(){
    this._postingEditForm = this._form.group({	
      title: new FormControl,
      details: new FormControl,
      address: new FormControl,	
      city: new FormControl,
      state: new FormControl,
      nameOfProvider:	new FormControl,
      category: new FormControl,
      dateAvailable: new FormControl,
      isCompleted: new FormControl
  });
  }

  onSubmit(){
    console.log(this._postingEditForm.value);
    this._PostingService.updatePost(this._postingEditForm.value).subscribe( () => console.log('you did it!'));
  }

}

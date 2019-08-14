import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PostingService } from 'src/app/services/posting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postingcreate',
  templateUrl: './postingcreate.component.html',
  styleUrls: ['./postingcreate.component.css']
})
export class PostingcreateComponent implements OnInit {

  private _postingForm: FormGroup;

  constructor(private _form: FormBuilder, private _postingService: PostingService, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

createForm(){
  this._postingForm = this._form.group({	
    title: new FormControl,
    details: new FormControl,
    address: new FormControl,	
    city: new FormControl,
    state: new FormControl,
    nameOfProvider:	new FormControl,
    category: new FormControl,
    dateAvailable: new FormControl
  });
}

onSubmit(){
  console.log(this._postingForm.value);
  this._postingService.createPost(this._postingForm.value).subscribe(data => {
    this._router.navigate(['/posting/list']);
  });
}

}

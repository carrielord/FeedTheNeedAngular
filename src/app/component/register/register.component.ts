import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, FormControl} from '@angular/forms';
import{AuthService} from '../../services/auth.service';
@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 _registerForm: FormGroup;
 constructor(private _form: FormBuilder, private _authService: AuthService) {
   this.createForm();
  }
 ngOnInit() {
 }
 createForm(){
   this._registerForm = this._form.group({
     email: new FormControl,
     password: new FormControl,
     confirmPassword: new FormControl,
     firstName: new FormControl,
     lastName: new FormControl,
     phoneNumber: new FormControl
   });
 }
 onSubmit(){
   console.log(this._registerForm.value);
   this._authService
   .register(this._registerForm.value)
   .subscribe(()=>this._authService.register(this._registerForm.value));
 }
}
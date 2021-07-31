import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { MustMatch } from '../directives/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      address:['', [Validators.required]],
      city:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required]]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }

  get f(){
    return this.userForm.controls;
  }
  onSubmit(){
    console.log(this.user);
    this._httpClient.post<User>('http://localhost:3000/user', this.user).subscribe(result => {
      alert('Registration Succesfull');
      this._router.navigate(['/home/', result.id]);
    }, error => {console.log(error)});
  }

  redirect(){
    this._router.navigate(['/login']);
  }

}

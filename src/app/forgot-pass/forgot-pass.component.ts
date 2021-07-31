import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      email:['', [Validators.required, Validators.email]]
    })
  }

  get f(){
    return this.userForm.controls;
  }
  onSubmit(){
    alert("Password Reset Email Sent.");
    this._router.navigate(['/login']);
  }

}

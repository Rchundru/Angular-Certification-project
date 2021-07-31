import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    email:'',
    password:''
  };
  userList: any;
  match: boolean = false;

  constructor(private _router: Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  login(){

    this._httpClient.get<User>('http://localhost:3000/user').subscribe(result => {
      this.userList=result;
      
      for(var i=0; i<this.userList.length; i++){
        if(this.userList[i].email.toLowerCase() == this.user.email.toLowerCase() && this.userList[i].password == this.user.password){
          this.match = true;
          localStorage.setItem('isLoggedIn', 'true');
          alert('Logged In Successfully');
          this._router.navigate(['/home/', this.userList[i].id]);
          return;
        }
      }
  }, error =>{console.log(error);});

      if(this.match==false){
      alert('Log in failed, please make sure your email and password is correct');
      }
 
    
  }

  register(){
    this._router.navigate(['/register']);
  }

  forgot(){
    this._router.navigate(['/forgot']);
  }

}

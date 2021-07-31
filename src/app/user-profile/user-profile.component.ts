import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id:any;
  user: User = new User();

  constructor(private _route: ActivatedRoute, private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<User>("http://localhost:3000/user/" + this.id).subscribe(result =>{
      this.user = result;
  })
  }

  updateUser(){
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.put("http://localhost:3000/user/" + this.id, this.user).subscribe(result =>{
      alert("Update successful")
      this._router.navigate(['/home/'+this.id]);
  })
  }

}

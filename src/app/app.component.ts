import { Component } from '@angular/core';
import { AuthGuard } from './services/auth-gaurd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'certProject';
  loginStatus: boolean = false;
  constructor(private _authGuard: AuthGuard){}

  ngOnInit(): void{
    this.loginStatus = this._authGuard.isLoggedIn();
  }
}

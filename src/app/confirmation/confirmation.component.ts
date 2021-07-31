import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  date: Date = new Date();
  constructor(private _router: Router, private _route: ActivatedRoute) { }
  id:any;

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  logout(){
    this._router.navigate(['/login']);
  }
  orderAgain(){
    this._router.navigate(['/home/', this.id]);
  }

}

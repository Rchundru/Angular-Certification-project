import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  id:any;
  order: Order = new Order();
  orderList : string[] = [];
  price: number;
  userId:any;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Order>("http://localhost:3005/orders/" + this.id).subscribe(result => {
      this.order = result;
      this.orderList = this.order.order;
      this.price=this.order.price;
      this.userId=this.order.userId;
    }, error => { console.log(error)});
  }

  orderNow(){
    this._router.navigate(['/confirmation/', this.userId]);
  }

    logout(){
      this._router.navigate(['/login']);
    }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/models/food';
import { Order } from 'src/models/order';
import { AuthGuard } from '../services/auth-gaurd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showProducts: boolean = true;
  foodList: any;
  productList: food[] =[];
  loginStatus: boolean = false;
  foods: string[]=[];
  userOrder: Order=new Order();
  id:any;
  constructor(private _httpClient: HttpClient, private _router: Router, private _authGuard: AuthGuard, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginStatus = this._authGuard.isLoggedIn();
    this._httpClient.get('http://localhost:3004/food').subscribe(result => {
      this.foodList=result;
  }, error =>{console.log(error);})
  }
  addToCart(product){
    //if(this.productList.indexOf(product) == -1){
      this.productList.push(product);
      this.foods.push(product.name);
      this.showProducts=true;
    //} else if(this.productList.indexOf(product) > -1){
    //  this.showProducts =false;
    //}
  }
  total() {
    return this.productList.reduce((total, product) => total + product.price, 0);
  }

  logout(){
    //this._authGuard.logout();
    //window.location.reload();
    this._router.navigate(['/login']);
  }

  checkout(){
    this.userOrder.order=this.foods;
    this.userOrder.price=this.total();
    this.userOrder.userId=this._route.snapshot.paramMap.get('id');
    if(this.foods.length==0){
      alert("Your cart is empty, please add items to cart before checking out.");
    }else{
    this._httpClient.post<Order>('http://localhost:3005/orders', this.userOrder).subscribe(result => {
      alert('order ID is: ' + result.id);
      this._router.navigate(['/orders', result.id]);
    
    }, error => {console.log(error)});
  }
  }

  profile(){
    this.id = this._route.snapshot.paramMap.get('id');
    this._router.navigate(['/profile/', this.id]);
  }

}

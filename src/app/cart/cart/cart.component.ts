import { Component,OnInit } from '@angular/core';
import { CartEffects } from '../cart.effects';
import { CartService } from '../cart.service';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  

  cartItems : Order[] = [];

  imageUrl = environment.imageUrl;

  
  constructor(private cartService : CartService){}


  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if(token){

    const payload = JSON.parse(atob(token.split('.')[1]));

    const userId : string = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    

    this.cartService.getCartItems(userId).subscribe({
      next : (data) =>{
       this.cartItems = data;
      },
      error : (err) =>{

       console.error(err?.error?.message)
      }
   })
  }
    
  }


}

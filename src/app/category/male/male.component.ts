import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/admin/services/product.service';
import { environment } from 'src/environments/environment.development';
import { CartService } from 'src/app/cart/cart.service';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  constructor(private productService : ProductService,private cartService : CartService){}
 
  products : Product[] = [];

  imageUrl : string = environment.imageUrl;

  ngOnInit(): void {

   this.productService.getAll().subscribe(data =>{

    this.products = data;

    console.log(this.products);

   });

    
  }

  addItemToCart(productId : string) : void{


    const token = localStorage.getItem('token');

    if(token){

    const payload = JSON.parse(atob(token.split('.')[1]));

    const userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    let orderDTO : OrderDTO = {

      productId : productId,
      userId : userId
    }
    this.cartService.addItemToCart(orderDTO).subscribe({
      next : () =>{
       console.log('Sepete başarıyla eklendi.')
      },
      error : (err) =>{

       console.error(err?.error?.message)
      }
   })
    }

   
    
    

  }

}

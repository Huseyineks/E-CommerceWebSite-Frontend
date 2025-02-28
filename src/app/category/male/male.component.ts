import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/admin/services/product.service';
import { environment } from 'src/environments/environment.development';
import { CartService } from 'src/app/cart/cart.service';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  constructor(private productService : ProductService,private cartService : CartService,private userService : UserService){}
 
  products : Product[] = [];

  imageUrl : string = environment.imageUrl;

  ngOnInit(): void {

   this.productService.getAll().subscribe(data =>{

    this.products = data;

    console.log(this.products);

   });

    
  }

  addItemToCart(productId : string) : void{


    this.cartService.itemNumber.set(this.cartService.itemNumber() + 1);

    
    const token = localStorage.getItem('token');

    if(token){

    

    let orderDTO : OrderDTO = {

      productId : productId,
      userId : this.userService.getUserId(token)
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

import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/admin/services/product.service';
import { environment } from 'src/environments/environment.development';
import { CartService } from 'src/app/cart/cart.service';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  constructor(private productService : ProductService
    ,private cartService : CartService,
    private userService : UserService
  ,private router : Router
  ,private modalService : ModalService){}
 
  products : Product[] = [];
  
  clickedButton : string[] = [];

  imageUrl : string = environment.imageUrl;

  ngOnInit(): void {

    
    

   this.productService.getAll().subscribe(data =>{

    this.products = data;

    console.log(this.products);

   });

   
   this.clickedButton = new Array(this.products.length).fill('');

    
  }

  addItemToCart(productId : string,index : number) : void{

    this.userService.isLoginRequired().subscribe(response => {

      if(response){

        
        this.clickedButton[index] = "clicked";

        this.cartService.itemNumber.set(this.cartService.itemNumber() + 1);


    let orderDTO : OrderDTO = {

      productId : productId
      
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
     
    })


    
   
    
    

  }

  showModal(productId : number){

    this.productService.get(productId).subscribe({
      next : (data) => {
        
        this.modalService.openModal(data);
        console.log('Başarıyla tamamlandı.');
      },
      error : (err) => {
        console.error(err?.error?.errorMessage);
      }
    })

  }

}

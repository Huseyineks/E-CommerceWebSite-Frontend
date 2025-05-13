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
  
 

  imageUrl : string = environment.imageUrl;

  chosenSize : string = '';

  ngOnInit(): void {

    
    

   this.productService.getAll().subscribe(data =>{

    this.products = data;

    console.log(this.products);

   });

   
   

    
  }

  

 
  showModal(productId : string){

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

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment.development';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
    
    
    imageUrl : string = environment.imageUrl;

    constructor(private productService : ProductService,private router : Router){}
  
    ngOnInit(): void {
  
      
      
  
     this.productService.getAll().subscribe(data =>{
  
      this.products = data;
  
      
  
     });
  
     
     
  
      
    }

    showModal(id : number){


    }


    editProduct(productId : string) : void{


      this.router.navigate(['admin/edit-product',productId]);
  
  
  
    }
}

import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/admin/model/product';
import { ProductService } from 'src/app/admin/services/product.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  constructor(private productService : ProductService){}
 
  products : Product[] = [];

  imageUrl : string = environment.imageUrl;

  ngOnInit(): void {

   this.productService.getAll().subscribe(data =>{

    this.products = data;

    console.log(this.products);

   });

    
  }

}

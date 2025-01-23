import { Injectable } from '@angular/core';
import { ProductDTO } from '../model/product-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(http : HttpClient) { }

  addProduct(productDTO : ProductDTO){


  }

  deleteProduct(id : string){


  }

  updateProduct(productDTO : ProductDTO){

    
  }
}

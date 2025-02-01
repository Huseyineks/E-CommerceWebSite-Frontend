import { Injectable } from '@angular/core';
import { ProductDTO } from '../model/DTOs/product-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;

  getAll() : Observable<Product[]> {


    return this.http.get<Product[]>(this.apiUrl + '/api/Product/api/getAll');

  }

  addProduct(productDTO : FormData) : Observable<void> {


    return this.http.post<void>(this.apiUrl + '/api/Product/api/addProduct', productDTO);
  }

  deleteProduct(id : string){


  }

  updateProduct(productDTO : ProductDTO){

    
  }

}

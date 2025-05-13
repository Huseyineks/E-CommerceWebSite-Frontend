import { Injectable } from '@angular/core';
import { ProductDTO } from '../../models/DTOs/product-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;

  getAll() : Observable<Product[]> {


    return this.http.get<Product[]>(this.apiUrl + '/api/Product/api/getAll');

  }

  get(productId : string) : Observable<Product>{

    return this.http.get<Product>(`${this.apiUrl}/api/Product/api/get?rowGuid=${productId}`)
  }

  addProduct(productDTO : FormData) : Observable<void> {


    return this.http.post<void>(this.apiUrl + '/api/Product/api/addProduct', productDTO);
  }

  deleteProduct(productId : string) : Observable<any>{

    return this.http.delete<any>(`${this.apiUrl}/api/Product/api/deleteProduct?rowGuid=${productId}`);

  }

  updateProduct(productDTO : FormData) : Observable<any>{


    return this.http.put<any>(this.apiUrl + '/api/Product/api/updateProduct',productDTO)

    
  }

}

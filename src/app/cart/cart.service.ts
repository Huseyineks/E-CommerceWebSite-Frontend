import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from '../models/DTOs/order-dto';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl
  addItemToCart(orderDTO : OrderDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Order/api/addItemToCart',orderDTO);
  }

  getCartItems(userId : string) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Order/api/getCartItems',userId);
  }
}

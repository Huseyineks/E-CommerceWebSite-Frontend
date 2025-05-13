import { effect, Injectable,OnInit, signal } from '@angular/core';
import { Product } from '../models/product';
import { Observable, ObservedValuesFromArray, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from '../models/DTOs/order-dto';
import { Order } from '../models/order';
import { ProductDTO } from '../models/DTOs/product-dto';
import { UserService } from '../user/user.service';
import { ReduceNumberDTO } from '../models/DTOs/reduce-number-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService{

  public itemNumber = signal(0);

  constructor(private http : HttpClient,private userService : UserService) { 

    effect(() =>{

      if(this.userService.isTokenValid() == '1'){
        this.getNumber().subscribe({
     
         next : (data) => {
           this.itemNumber.set(data);
         },
         error : (error) => {
           console.error(error);
         }
        }
        
        )
       }
       else{
     
         this.itemNumber.set(0);
       }

    })
   
  }

  
  

  private apiUrl = environment.apiUrl
  addItemToCart(orderDTO : OrderDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Order/api/addItemToCart',orderDTO,{withCredentials : true});
  }

  getCartItems() : Observable<any>{

    return this.http.get<any>(this.apiUrl + '/api/Order/api/getCartItems',{withCredentials : true});
  }
  getNumber() : Observable<any>{

    return this.http.get<any>(this.apiUrl + '/api/Order/api/getNumber');
  }
  increaseNumber(orderId : number) : Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/api/Order/api/increaseNumber?orderId=${orderId}`,null);

  }

  reduceNumber(orderId : number){

    return this.http.put<any>(`${this.apiUrl}/api/Order/api/reduceNumber?orderId=${orderId}`,null);
  }

  reduceNumberOutOfCart(reduceNumberDTO : ReduceNumberDTO) : Observable<any>{

    return this.http.put<any>(this.apiUrl + '/api/Order/api/reduceNumberOutOfCart',reduceNumberDTO,{withCredentials : true})
  }
}

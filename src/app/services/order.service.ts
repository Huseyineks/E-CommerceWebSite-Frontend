import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private apiUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }


  getPastOrders() : Observable<any>{


    return this.http.get<any>(this.apiUrl + '/api/Order/api/getPastOrders',{withCredentials : true});
  }

  getOrder(id : string) : Observable<any>{


    return this.http.get<any>(`${this.apiUrl}/api/Order/api/getOrder?guid=${id}`);
  }
}

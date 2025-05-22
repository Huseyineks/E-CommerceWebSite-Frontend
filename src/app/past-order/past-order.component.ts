import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { environment } from 'src/environments/environment.development';
import { MasterOrderDTO } from '../models/DTOs/master-order-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.css']
})
export class PastOrderComponent implements OnInit {


  imageUrl = environment.imageUrl;
  constructor(private orderService : OrderService,private router : Router) { }
 

  pastOrders : MasterOrderDTO[] = [];
  ngOnInit(): void {

this.orderService.getPastOrders().subscribe({

  next : (data) =>{

    this.pastOrders = data;
    console.log('Başarıyla tamamlandı.');
  },

  error : () => {

    console.error('Bir hata oluştu');
  }

})
    
    
  }

  onClick(id: string) {

    this.router.navigate(['order-detail',id]);
    
}

}

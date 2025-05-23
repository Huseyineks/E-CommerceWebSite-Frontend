import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterOrderDTO } from 'src/app/models/DTOs/master-order-dto';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit
{
 imageUrl = environment.imageUrl;
   constructor(private orderService : OrderService,private router : Router) { }
  
 
   pastOrders : MasterOrderDTO[] = [];
   ngOnInit(): void {
 
 this.orderService.getPastOrders().subscribe({
 
   next : (data) =>{
 
     this.pastOrders = data.sort((a: MasterOrderDTO, b: MasterOrderDTO) => {
       const dateA = new Date(a.createdDate).getTime();
       const dateB = new Date(b.createdDate).getTime();
       return dateA - dateB;
     });
     console.log('Başarıyla tamamlandı.');
   },
 
   error : () => {
 
     console.error('Bir hata oluştu');
   }
 
 })
     
     
   }

   onClick(id: string) {
     this.router.navigate(['admin/order-detail', id]);
   }
}

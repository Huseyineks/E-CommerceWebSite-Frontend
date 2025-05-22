import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterOrderDTO } from 'src/app/models/DTOs/master-order-dto';
import { OrderService } from 'src/app/services/order.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  imageUrl = environment.imageUrl;
 order : MasterOrderDTO = {
   guid: '',
   orders: [],
   deliveryAdress: '',
   createdDate: undefined
 };
  constructor(private route : ActivatedRoute,private orderService : OrderService){}
  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    if(id){

      this.orderService.getOrder(id).subscribe({

      next : (data) => {

        this.order = data;
        console.log('İşlem başarıyla tamamlandı');
      },
      error : () => {

        console.error('Bir hata oluştu');
      }
    })

    }
    
    console.log('bak bir');
    
  }

}

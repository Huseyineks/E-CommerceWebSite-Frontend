import { Component,OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from '../../cart.service';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup } from '@angular/forms';
import { AdressDTO } from 'src/app/models/DTOs/adress-dto';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.css']
})
export class CompleteOrderComponent implements OnInit {

  cartItems : Order[] = [];

  adressForm : FormGroup = new FormGroup({});

  
  imageUrl = environment.imageUrl;

  itemsVisiblity : string = 'hide'

  adressVisiblity : string = ''

  constructor(private cartService : CartService){}

  ngOnInit(): void {
   
let nullOrder : Order = {
      id : -1,
      productDescription : '',
      productImage : '',
      productName : '',
      productNumber : 0,
      productPrice : '',
      rowGuid : '',
      size : ''
    }

     this.adressForm = new FormGroup({
    
       Adress : new FormControl('')
       
    
      });
    

    this.cartService.getCartItems().subscribe({
      next : (data) =>{
       this.cartItems = data;

       this.cartItems = [nullOrder,...this.cartItems];
      },
      error : (err) =>{

       console.error(err);
      }
   })
    

  }

  showItems() : void{

    this.itemsVisiblity = 'show'

  }
  closeItems() : void{

    this.itemsVisiblity = 'hide'
  }
  
  onStatusChange(event: Event) : void{

    const input = event.target as HTMLInputElement;

    if(input.value == 'RegisteredAdress'){

      this.adressVisiblity = ''

    }
    else{

      this.adressVisiblity = 'show'
    }

  }

  completeOrder() : void{

    let adressDTO : AdressDTO = this.adressForm.value;

    this.cartService.completeOrder(adressDTO).subscribe({

      next : () => {

        console.log('Siparişiniz alındı')
      },

      error : () =>{

        console.error('Bir hata oluştu');
      }


    })

    


  }
}

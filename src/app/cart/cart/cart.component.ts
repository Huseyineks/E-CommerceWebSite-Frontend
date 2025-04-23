import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  

  cartItems : Order[] = [];

  imageUrl = environment.imageUrl;

  
  constructor(private cartService : CartService,private userService : UserService){}


  ngOnInit(): void {

    

    

    

    

    let nullOrder : Order = {
      id : -1,
      productDescription : '',
      productImage : '',
      productName : '',
      productNumber : 0,
      productPrice : '',
      rowGuid : ''
    }

    

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

  increaseNumber(orderId : number) : void{

    this.cartService.itemNumber.set(this.cartService.itemNumber() + 1);

    let cartItemIndex = this.cartItems.findIndex(i => i.id == orderId);

    if(cartItemIndex){

      let perPrice = parseFloat(this.cartItems[cartItemIndex].productPrice)/this.cartItems[cartItemIndex].productNumber;

      this.cartItems[cartItemIndex].productNumber += 1;

      const totalPrice = parseFloat(this.cartItems[cartItemIndex].productPrice) + perPrice;

      this.cartItems[cartItemIndex].productPrice = totalPrice.toString();
    }

    this.cartService.increaseNumber(orderId).subscribe({
      next : () =>{
        console.log('Artırıldı.')
       },
       error : (err) =>{
 
        console.error(err?.error?.message)
       }
    })

  }

  reduceNumber(orderId : number) : void{

    this.cartService.itemNumber.set(this.cartService.itemNumber() - 1);

    let cartItemIndex = this.cartItems.findIndex(i => i.id == orderId);

    if(cartItemIndex){

      if(this.cartItems[cartItemIndex].productNumber == 1){

        

        this.cartItems.splice(cartItemIndex,1);
        
      }

      else{

      
      let perPrice = parseFloat(this.cartItems[cartItemIndex].productPrice)/this.cartItems[cartItemIndex].productNumber;

      this.cartItems[cartItemIndex].productNumber -= 1;

      const totalPrice = parseFloat(this.cartItems[cartItemIndex].productPrice) - perPrice;

      this.cartItems[cartItemIndex].productPrice = totalPrice.toString();

      
      }
    }

    this.cartService.reduceNumber(orderId).subscribe({
      next : () =>{
        console.log('Azaltıldı.')
       },
       error : (err) =>{
 
        console.error(err?.error?.message)
       }
    })
  }


}

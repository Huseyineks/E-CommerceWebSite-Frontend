import { Component, effect } from '@angular/core';
import { ModalService } from './modal.service';
import { Product } from 'src/app/models/product';
import { ProductDTO } from 'src/app/models/DTOs/product-dto';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';
import { UserService } from 'src/app/user/user.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  modalState : string = '';
  modalData: Product = {

    productDescription : '',
    productImage : '',
    productName : '',
    productPrice : '',
    id : 0,
    rowGuid : ''
  
  };
  imageUrl : string = environment.imageUrl;

  constructor(private modalService: ModalService,private userService : UserService,private cartService : CartService) {

    effect(() =>{
      
      this.modalState = this.modalService.modalState();
    
    })
  }

  ngOnInit() {
    this.modalService.modalData$.subscribe(data => {
      
      this.modalData = data;

    });


}

closeModal(){

  this.modalService.closeModal();
}



addItemToCart(productId : string) : void{

    this.userService.isLoginRequired().subscribe(response => {

      if(response){

        
        

        this.cartService.itemNumber.set(this.cartService.itemNumber() + 1);


    let orderDTO : OrderDTO = {

      productId : productId
      
    }
    this.cartService.addItemToCart(orderDTO).subscribe({
      next : () =>{
       console.log('Sepete başarıyla eklendi.')
      },
      error : (err) =>{

       console.error(err?.error?.message)
      }
   })
    


      }
     
    })


    
   
    
    this.closeModal();

  }
}

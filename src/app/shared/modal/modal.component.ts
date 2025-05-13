import { Component, effect } from '@angular/core';
import { ModalService } from './modal.service';
import { Product } from 'src/app/models/product';
import { ProductDTO } from 'src/app/models/DTOs/product-dto';
import { environment } from 'src/environments/environment.development';
import { OrderDTO } from 'src/app/models/DTOs/order-dto';
import { UserService } from 'src/app/user/user.service';
import { CartService } from 'src/app/cart/cart.service';
import { ReduceNumberDTO } from 'src/app/models/DTOs/reduce-number-dto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  chosenSize : string = '';
  showBox : string = '';
  modalState : string = '';
  itemNumber : number = 0;
  modalData: Product = {

    productDescription : '',
    productImage : '',
    productName : '',
    productPrice : '',
    id : 0,
    rowGuid : '',
    productSizes : null
  
  };

  clickedButton : string = '';
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

  this.chosenSize = '';
  this.showBox = '';
  this.clickedButton = '';
}



addItemToCart(productId : string) : void{

  this.clickedButton = "clicked";
  this.showBox = "show";

  if(this.itemNumber == 0){

    this.itemNumber = 1;
  }

    this.userService.isLoginRequired().subscribe(response => {

      if(response){

        
        

        this.cartService.itemNumber.set(this.cartService.itemNumber() + 1);


    let orderDTO : OrderDTO = {

      productId : productId,
      size : this.chosenSize
      
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


    
   
    
    

  }

  increaseNumber(productId : string) : void{

    this.itemNumber +=1;
    this.addItemToCart(productId);
  }

  reduceNumberOutOfCart(productId : string) : void{

    
   
    const reduceNumberDTO : ReduceNumberDTO = {

      productId : productId,
      size : this.chosenSize
    }

    this.cartService.reduceNumberOutOfCart(reduceNumberDTO).subscribe({

      next : () => {

        this.itemNumber -=1;
        if(this.itemNumber == 0){

          this.closeModal();
        }
        this.cartService.itemNumber.set(this.cartService.itemNumber() -1);
        console.log('Başarıyla tamamlandı');
      },

      error : () => {

        console.error('Bir hata oluştu');
      }
    })

    

    


    
  }

   declareSize(size : string) : void{

    this.chosenSize = size;
    this.itemNumber = 0;
    this.clickedButton = '';
  }

  
}

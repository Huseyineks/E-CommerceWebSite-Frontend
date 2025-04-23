import { Component, effect } from '@angular/core';
import { ModalService } from './modal.service';
import { Product } from 'src/app/models/product';
import { ProductDTO } from 'src/app/models/DTOs/product-dto';
import { environment } from 'src/environments/environment.development';

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
    rowGuid : '',
    size : ''


  };
  imageUrl : string = environment.imageUrl;

  constructor(private modalService: ModalService) {

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
}

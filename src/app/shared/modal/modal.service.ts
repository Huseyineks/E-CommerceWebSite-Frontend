import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDTO } from 'src/app/models/DTOs/product-dto';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalDataSource = new BehaviorSubject<any>(null);
  modalData$ = this.modalDataSource.asObservable();
  modalState = signal('');

  

  openModal(data: Product) {
    this.modalDataSource.next(data);
    this.modalState.set('show');
     
  }

  closeModal() {
    this.modalDataSource.next(null);
    this.modalState.set('hide');
    
  }
}

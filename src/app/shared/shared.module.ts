import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TotalPricePipe, TotalProductNumberPipe } from '../pipes/order-pipes';


@NgModule({
  declarations: [
    ModalComponent,
    TotalProductNumberPipe,
    TotalPricePipe
  ],
  imports: [
    CommonModule
  ],
  exports : [ModalComponent,

    TotalProductNumberPipe,
    TotalPricePipe
  ]
})
export class SharedModule { }

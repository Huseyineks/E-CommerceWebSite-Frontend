import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'totalProductNumber'
})
export class TotalProductNumberPipe implements PipeTransform {
  transform(orders: Order[]): number {
    return orders.reduce((total, order) => total + order.productNumber, 0);
  }
}

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {
  transform(orders: Order[]): number {
    return orders.reduce((total, order) => {
      const price = parseFloat(order.productPrice.replace(/[^0-9.-]+/g, ''));
      return total + price;
    }, 0);
  }
} 
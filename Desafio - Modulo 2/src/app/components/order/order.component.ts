import { Component } from '@angular/core';
import { IOrderProduct } from 'src/app/interfaces/iorder-item';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderProduct: IOrderProduct[] = this.orderService.getOrderProduct();

  constructor(private orderService: OrderService) { }

  getOrderProduct(): IOrderProduct[] {
    this.orderProduct = this.orderService.getOrderProduct();
    return this.orderProduct;
  }
  clear() {
    this.orderService.clear()
  }

  delete(index: number) {
    this.orderProduct.splice(index, 1);
  }

}

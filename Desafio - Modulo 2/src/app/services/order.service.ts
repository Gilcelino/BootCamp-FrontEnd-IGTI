import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrderProduct } from '../interfaces/iorder-item';
import { IProduct } from '../interfaces/iproduct';

const url = `${environment.API}cardapio`

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderProduct: IOrderProduct[] = []

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(url);
  }


  addItemCart(product: IProduct) {

    const item = this.orderProduct.find(item => item.product === product);

    if (item) {
      item.units++;
      return
    }
    this.orderProduct.push({
      units: 1,
      product: product
    })

  }

  getTotalUnits(): number {
    let totalUnits = 0;
    this.orderProduct.forEach(x => { totalUnits += x.units });
    return totalUnits;
  }

  getTotalValue(): number {
    let totalValue = 0;
    this.orderProduct.forEach(x => { totalValue += (x.units * x.product.preco) });
    return totalValue;
  }

  getOrderProduct(): IOrderProduct[] {
    console.log(this.orderProduct)
    return this.orderProduct
  }

  clear() {
    this.orderProduct = [];
  }

}


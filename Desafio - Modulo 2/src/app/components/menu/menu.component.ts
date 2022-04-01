import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: IProduct[] = []

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.getMenu().subscribe(itens => {
      this.menu = itens;
    });
  }

  getCategory(): String[] {
    let category: String[] = [];

    if (this.menu.length == 0) {
      return [];
    }

    this.menu.map(product => product.categoria).reduce((x, y) => {
      if (category.find(cat => cat == x)) {
        return y;
      }
      category.push(x);
      return y;
    });
    return category;
  }

  getItemCategoria(category: any): IProduct[] {

    return this.menu.filter(product => product.categoria === category);
  }

  addItemCart(product: IProduct) {
    this.orderService.addItemCart(product);
  }

  getTotalUnits(): number {
    return this.orderService.getTotalUnits();
  }

  getTotalValue(): number {
    return this.orderService.getTotalValue();
  }
}

